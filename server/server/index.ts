import express, { Express, Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import bodyParser from 'body-parser';
import UserRouter from './routes/Userroute';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app: Express = express();
const port=3000;
const prisma=new PrismaClient();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", UserRouter);
app.use(cors())


app.get('/', async (req: Request, res: Response) => {
  res.send("Hello World");
})



app.listen(port, () => {
  console.info(`Ready on port ${port}`);
});



