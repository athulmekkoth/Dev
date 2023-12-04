import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;
import { Request } from "express";

const isAuth = (req: Request): string => {
  const authorization = req.headers['authorization'];

  if (!authorization) {
    throw new Error("You need to login");
  }

  try {
    const token = authorization.split(' ')[1];
    const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET!) as { userId: string };
    return userId;
  } catch (error) {
    console.log(error);
    throw new Error("You are not authenticated");
  }
};

export default isAuth;