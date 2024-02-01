
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import express, { Express, NextFunction, Request, Response } from 'express';
const createAccessToken = (userId: string) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET!, {
        expiresIn: '1h' 
    });
}

const createRefreshToken = (userId: string) => {

    return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET!, {
        expiresIn: "7d"
    })
}

const sendaccessToken = (req:Request,res:Response, token: string) => {

    res.status(200).json({ accessToken: token })
}
const sendrefreshToken = (res: any, token: string) => {(
res.cookie('refreshtoken',token,{
    httpOnly:true,//WE CAMT MODIFY WITH JS
    path: '/'   //ONLY END POINT CAN MODIFY
})


)}
const isTokenExpired = (expiresAt: Date) => {
    return expiresAt <= new Date();
  };
  

  const calculateTokenExpiration = () => {
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 7); 
    return expiration;
  };
export { createAccessToken, createRefreshToken,sendrefreshToken,sendaccessToken,isTokenExpired,calculateTokenExpiration}