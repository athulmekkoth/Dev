import express, { Express, NextFunction, Request, Response } from 'express';
import publishMessage from '../rabbitMQ/producer';

const sendMail=async(req:Request,res:Response,next:NextFunction)=>{
    const data=req.body
   
    if(data)
    {
        publishMessage(data)
        res.status(200).json({message:"successfully send mai;"})
    }


}

export default sendMail