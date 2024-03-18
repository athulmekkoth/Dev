import jsonwebtoken from 'jsonwebtoken';
const { verify } = jsonwebtoken;
import { NextFunction, Request, Response } from "express";
interface DecodedToken {
  userId: string;
  isAdmin: boolean;
}
declare global {
  namespace Express {
    interface Request {
      user?: DecodedToken;

    }
  }
}
const isAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authorization = req.headers['authorization'];
  if (!authorization) {
    throw new Error("You need to login");
  }
  try {
    const token = authorization.split(' ')[1];
    const decodedToken = verify(token, process.env.ACCESS_TOKEN_SECRET!) as { userId: string, isAdmin: boolean };
    const userId = decodedToken.userId;
    const isAdmin = decodedToken.isAdmin;
    req.user = { userId, isAdmin };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "You need to login" });
  }
};
export default isAuth;
