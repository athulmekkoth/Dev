import express, { Express, NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;
import { PrismaClient } from '@prisma/client';
import { createToken } from '../utils/token';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();


const UserRegister = async (req: Request, res: Response) => {

  try {
    const { name, email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (user) {

      return res.status(400).json({ message: "User already exists" });

    }
    const hashedpass = await bcrypt.hash(password, 10);
    const newuser = await prisma.user.create({
      data: {
        username: name,
        email: email,
        password: hashedpass
      }
    })

    return res.status(200).json({ message: "User created successfully" });
  }
  catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}


const UserLogin = async (req: Request, res: Response) => {

  try {
    const user = await prisma.user.findUnique({ where: { email: req.body.email } });

    if (!user) {

      return res.status(204).json({ message: "User does not exist" });
    }

    const password = await bcrypt.compare(req.body.password, user.password);

    if (!password) {
      return res.status(400).json({ message: "Incorrect password" });
    }



    const Token = createToken(user.id, user.isAdmin);
    console.log(Token); // Verify the token before setting the cookie
    res.cookie("token", Token, {
      httpOnly: true
    });

    // Log the cookies received in the request
    console.log(req.cookies.token+"cooe");
    
    // Check if the token is successfully set as a cookie

    return res.status(200).json({ message: "User logged in successfully", user: { id: user.id, name: user.username, isAdmin: user.isAdmin,token:Token} });

  } catch (error) {
console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};




const UserLogout = async (req: Request, res: Response) => {
  try {

    res.clearCookie('token', { path: '/' })
    return res.status(200).json({ message: "user logged out successfully" })

  }
  catch (error) {
    res.status(500).json({ message: "error.message" });
  }
}

const UserRefreshToken = async (req: Request, res: Response) => {

  const token = req.cookies.refreshToken;


  if (!token) {
    return res.status(400).json({ accestoken: "" + "no token" })
  }
  let payload: any = null
  try {
    //if toekn verify

    payload = verify(token, process.env.REFRESH_TOKEN_SECRET!)


    return res.status(200).json({ payload })
  } catch (error) {

    return res.status(300).json({ accestoken: "" })

  }
}

const Userdelete = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;

    const user = await prisma.user.delete({ where: { id: id } })
    res.status(200).json({ message: "user deleted successfully" })
  }
  catch (error: any) {
    res.status(500).json({ message: "error.message" })
  }
}

export { UserRegister, UserLogin, UserLogout, UserRefreshToken, Userdelete }