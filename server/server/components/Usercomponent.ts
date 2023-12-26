import express, { Express, NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;
import { PrismaClient } from '@prisma/client';
import { createAccessToken,createRefreshToken,sendrefreshToken,sendaccessToken } from '../utils/token';
import bcrypt from 'bcrypt';
import isAuth from '../utils/isAuth';
const prisma = new PrismaClient();
const UserRegister = async (req: Request, res: Response) => {
  try {
    const {name,email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email: email } });
    if(user){
      return res.status(400).json({ message: "User already exists" });
    
  }
  const hashedpass=await bcrypt.hash(password,10);
  const newuser=await prisma.user.create({
    data:{
      username:name,
      email:email,
      password:hashedpass
    }
  })
  return res.status(200).json({ message: "User created successfully" });


}
  catch (error) {
    res.status(500).json({ message: "error.message" });
  }
}


const UserLogin = async (req: Request, res: Response) => {
  try{
    const user=await prisma.user.findUnique({where:{email:req.body.email}});
    if(!user){
      return res.status(400).json({message:"user does not exist"})
    }
    const password=await bcrypt.compare(req.body.password,user.password);
    if(!password){
      return res.status(400).json({message:"incorrect password"})
    }
    const refreshtoken=await prisma.refreshToken.findUnique({where:{userId:user.id}});
    const accessToken=createAccessToken(user.id);
    
  if(!refreshtoken){
    const refreshtoken=createRefreshToken(user.id);
    const token=await prisma.refreshToken.create({
     data:{
       userId:user.id,
       token:refreshtoken
     }
    })
  }
 sendrefreshToken(res,refreshtoken?.token)
   
    return res.status(200).json({message:"user logged in successfully",accessToken:accessToken})
    

  }
  catch(error){
    res.status(500).json({ message: "error.message" });
  }
}

const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const userId=isAuth(req)
    console.log(userId)
    if(!userId){
      return res.status(400).json({message:"user not authenticated and data is protecred"})
    }
  }
  catch(error){
    res.status(500).json({ message: "error.message" });
  }
}


const UserLogout = async (req: Request, res: Response) => {
  try{
    res.clearCookie('refreshtoken',{path:'/refresh_token'})
    return res.status(200).json({message:"user logged out successfully"})

  }
  catch(error){
    res.status(500).json({ message: "error.message" });
  }
}

const UserRefreshToken = async (req: Request, res: Response) => {
  const token=req.cookies.refreshtoken;
  console.log(req.cookies)
  if(!token){
return res.status(400).json({accestoken:""})
  }
  let payload:any=null
  try{
    //if toekn verify
    payload=verify(token,process.env.REFRESH_TOKEN_SECRET!)
  }catch(error){
     return res.status(400).json({accestoken:""})
  
}
//toekn valid
const user=await prisma.refreshToken.findUnique({where:{userId:payload.userId}})
console.log(user)
if(!user){
  return res.status(400).json({accestoken:""})
    }
    //user exisr ceck refesh exir
    if(user?.token!==token){
      return res.status(400).json({accestoken:""})
    }
      //toek ensit create new refresh and accesstoekn
      const accesstoekn=createAccessToken(user.userId)
      const refreshtoken=createRefreshToken(user.userId)
      await prisma.refreshToken.update({where:{userId:user.userId},data:{token:refreshtoken}})
      res.send({accesstoekn})
}

export {UserRegister,UserLogin,UserLogout,protectedRoute,UserRefreshToken}