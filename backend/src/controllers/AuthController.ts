import { Request, Response } from "express";
import { getRepository } from "typeorm";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/User";

export default {
  async auth(request: Request, response: Response) {
    const repository = getRepository(User);
    const { email, password } = request.body;

    const user = await repository.findOne({ where: { email } });
    if (!user) {
      return response.status(409).send("user not");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return response.status(401).send("password invalida");
    }

    const token = jwt.sign({ id: user.id }, `${process.env.BCRYPT_PASSWORD}`, {
      expiresIn: "1d",
    });
    return response.json({
      user: { email: user.email, name: user.name },
      token,
    });
  },
};
