import jwt from 'jsonwebtoken';
import 'dotenv/config';
import express, { Express, NextFunction, Request, Response } from 'express';

type User = {
    userId: string,
    isAdmin: boolean
}

const createAccessToken = (userId: string, isAdmin: boolean) => {
 
    const token =jwt.sign({ userId: userId, isAdmin: isAdmin }, process.env.ACCESS_TOKEN_SECRET!, {
        expiresIn: '5h'
        
    });
    return token;
   
}

const createRefreshToken = (userId: string, isAdmin: boolean) => {
    
    return jwt.sign({  userId: userId, isAdmin: isAdmin }, process.env.REFRESH_TOKEN_SECRET!, {
        expiresIn: "7d"
    })
}

const sendAccessToken = (req: Request, res: Response, token: string) => {
    res.status(200).json({ accessToken: token })
}



const sendRefreshToken = (res: Response, token: string) => {
    res.cookie('refreshToken', token, {
        httpOnly: true,
        secure: true,
     
    });
};
;


const isTokenExpired = (expiresAt: Date) => {
    return expiresAt <= new Date();
};

const calculateTokenExpiration=()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 7);
    return expiration;
};


export { createAccessToken, createRefreshToken, sendRefreshToken, sendAccessToken, isTokenExpired, calculateTokenExpiration }
