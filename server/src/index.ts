import express, { Express, Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";
import bodyParser from 'body-parser';
import UserRouter from './routes/Userroute';
import ContentRouter from './routes/Contentrouter';
import redis from './utils/client';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';
import { EmailLogger } from '../logger/EmailLogger';
import emailRouter from './routes/EmailRoute';

const app: Express = express();
const port = 3000;
const prisma = new PrismaClient();

const logger = process.env.NODE_ENV !== 'production' ? EmailLogger() : null;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173'
}));

app.use("/user", UserRouter);
app.use("/content", ContentRouter);
app.use("/email", emailRouter);
app.get('/', async (req: Request, res: Response) => {
  res.send("Hello World");
});


// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (logger) {
    logger.error(`Error: ${err.message}`);
  } else {
    console.error(`Error: ${err.message}`);
  }
  res.status(500).send('Something broke!');
});

app.listen(port, async() => {
 console.log(`port is sucessfully running ${port}`)

});
