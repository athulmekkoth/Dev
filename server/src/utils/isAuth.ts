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

  try {
   const token=req.headers.authorization?.split(" ")[1]
    const refreshToken = req.cookies.refreshToken
    console.log(refreshToken)
  
  const decodedToken = verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!) as { userId: string, isAdmin: boolean };
  console.log(decodedToken)
   const userId = decodedToken.userId;
   const isAdmin = decodedToken.isAdmin;

    req.user = { userId, isAdmin };
    
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "You need to login" });
  }
};
export default isAuth;
