import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import User from "../models/User";

export default {
  index(request: Request, response: Response) {
    return response.json({ userId: request.userId });
  },
  async create(request: Request, response: Response) {
    const repository = getRepository(User);
    const { email, name, password } = request.body;

    const data = { email, name, password };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
    const alreadyExist = await repository.findOne({ where: { email } });
    if (alreadyExist) {
      return response.sendStatus(409);
    }

    const user = repository.create({ email, name, password });
    await repository.save(user);
    return response.status(201).json(user);
  },
};
