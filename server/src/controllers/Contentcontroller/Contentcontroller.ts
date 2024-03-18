import express, { Express, NextFunction, Request, Response } from 'express';
import { verifyToken } from '../../utils/token';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
const prisma=new PrismaClient();
export const getPost = async (req: Request, res: Response,next:NextFunction) => {
try{
   const data=await prisma.idea.findMany();
   res.status(200).json(data);
}
   catch(error:any){
       res.status(500).json({message:error.message});
   }
}
export const createPost = async (req: Request, res: Response,next:NextFunction) => {
   try{
      const data=await prisma.idea.create({
         

      })
      res.status(200).json(data);
   }
      catch(error:any){
          res.status(500).json({message:error.message});
      }
   }