import express, { Express, Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";
import bodyParser from 'body-parser';
import UserRouter from './routes/Userroute';
import contentrouter from './routes/Contentrouter';
import redis from './utils/client';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import 'dotenv/config';

// const app: Express = express();
// const port = 3000;
// const prisma = new PrismaClient();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(cors({
//   credentials: true,
//   origin: 'http://localhost:5173'
  
// }));


// app.use("/user", UserRouter);
// app.use("/content", contentrouter);

// app.get('/', async (req: Request, res: Response) => {
//   res.send("Hello World");
// })



// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
import AWS from 'aws-sdk';

const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
};

const SENDER_EMAIL = process.env.SENDER_EMAIL;
console.log(process.env.AWS_SECRET_ACCESS_KEY);

if (!SENDER_EMAIL) {
    console.error("SENDER_EMAIL environment variable is not set.");
    process.exit(1); 
}

const AWS_SES = new AWS.SES(SES_CONFIG);
console.log(SENDER_EMAIL)
const sendMail = async (to: string, subject: string, body: string) => {
    let params = {
        Source: SENDER_EMAIL,
        Destination: {
            ToAddresses: [to],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: '<h1>HTML</h1>'
                },
                Text: {
                    Charset: "UTF-8",
                    Data: body
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject
            }
        }
    };

    try {
        let data = await AWS_SES.sendEmail(params).promise();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

sendMail('athulmekkoth22@gmail.com', 'hau', "sss");