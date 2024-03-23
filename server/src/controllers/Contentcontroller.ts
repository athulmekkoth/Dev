import express, { Express, NextFunction, Request, Response } from 'express';

import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
const prisma=new PrismaClient();

export const createMail = async (req: Request, res: Response,next:NextFunction) => {

     try{
        console.log('dd')
        console.log(req.cookies)
    //     const data=req.body
    //   console.log(data)
      res.status(200).json({message:"mail sent"});
     }
   
   
      catch(error:any){
          res.status(500).json({message:error.message});
      }
   }