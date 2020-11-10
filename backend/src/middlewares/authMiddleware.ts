import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddeware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  if (!authorization) {
    return response.status(401).send("auth");
  }

  const token = authorization.replace("Bearer", "").trim();
  try {
    const data = jwt.verify(token, `${process.env.BCRYPT_PASSWORD}`);
    const { id } = data as TokenPayload;
    request.userId = id;
    next();
  } catch {
    return response.status(401).send("anoter");
  }
}
