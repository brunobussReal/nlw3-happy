import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import User from "../models/User";

class UserController {
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
    const alreadyExist = repository.find({ where: { email } });
    if (alreadyExist) {
      return response.sendStatus(409);
    }

    const user = await repository.create({ email, name, password });
    await repository.save(user);
    return response.json(user);
  }
}

export default new UserController();
