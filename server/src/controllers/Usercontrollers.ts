import express, { Express, NextFunction, Request, Response } from 'express';
import jsonwebtoken from 'jsonwebtoken';
const { sign, decode, verify } = jsonwebtoken;
import { PrismaClient } from '@prisma/client';
import { createAccessToken, createRefreshToken, isTokenExpired, calculateTokenExpiration, sendAccessToken, sendRefreshToken } from '../utils/token';
import bcrypt from 'bcrypt';
import isAuth from '../utils/isAuth';
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

      return res.status(404).json({ message: "User does not exist" });
    }

    const password = await bcrypt.compare(req.body.password, user.password);

    if (!password) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    let refreshToken = await prisma.refreshToken.findUnique({ where: { userId: user.id } });
    ///

    const accessToken = createAccessToken(user.id, user.isAdmin);


    if (!refreshToken || isTokenExpired(refreshToken.expiresAt)) {

      const newRefreshToken = createRefreshToken(user.id, user.isAdmin);
    
      //if exist update else create
      await prisma.refreshToken.upsert({
        where: { userId: user.id },
        update: { token: newRefreshToken, expiresAt: calculateTokenExpiration() },
        create: {
          userId: user.id,
          token: newRefreshToken,
          expiresAt: calculateTokenExpiration(),
        },
      });

      const refreshToken = { token: newRefreshToken };
console.log(refreshToken)
      sendRefreshToken(res, newRefreshToken);
    
    } else {
      console.log(refreshToken.token)
      sendRefreshToken(res, refreshToken.token);
    }

    return res.status(200).json({ message: "User logged in successfully", accessToken, user: { id: user.id, name: user.username, isAdmin: user.isAdmin } });

  } catch (error) {
  
    return res.status(500).json({ message: "Internal Server Error" });
  }
};


//  const protectedRoute = async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     c = isAuth(req)
   
//      if (userId !== null) {

//       return res.status(400).json({ message: "and data is protecred" })    }
//      }
//   catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// }


const UserLogout = async (req: Request, res: Response) => {
  try {

    res.clearCookie('refreshtoken', { path: '/' })
    return res.status(200).json({ message: "user logged out successfully" })

  }
  catch (error) {
    res.status(500).json({ message: "error.message" });
  }
}

const UserRefreshToken = async (req: Request, res: Response) => {

  const token = req.cookies.refreshToken;

  
  if (!token) {
    return res.status(400).json({ accestoken: ""+"no token" })
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

//toekn valid
/*
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
      //new refresh and acess toke
      await prisma.refreshToken.update({where:{userId:user.userId},data:{token:refreshtoken}})
      res.send({accesstoekn})
}
*/
const Userdelete=async(req:Request,res:Response)=>{
try{
  const id=req.body.id;

  const user=await prisma.user.delete({where:{id:id}})
  res.status(200).json({message:"user deleted successfully"})
}
catch(error:any){
  res.status(500).json({message:"error.message"})
}
}

export { UserRegister, UserLogin, UserLogout, UserRefreshToken,Userdelete }