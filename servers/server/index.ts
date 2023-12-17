import express, { Express, Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import bodyParser from 'body-parser';
import UserRouter from './routes/Userroute';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from "@apollo/server/express4"

const app: Express = express();
const port=3000;
const bootstapServer = async () => {

  const server = new ApolloServer({
typeDefs,
resolvers
  })

await server.start()

  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", UserRouter);
app.use(cors())

app.use("/graphql",expressMiddleware(server))



app.listen(port, () => {
  console.info(`Ready on port backend  ${port}`);
  console.info(`Ready on port graphql  ${port}/graphql`);
});




}
bootstapServer()