// import AWS from 'aws-sdk';

// const SES_CONFIG={
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_REGION
// }
// const AWS_SES=new AWS.SES(SES_CONFIG);
// const sendMail = async (to: string, subject: string, body: string) => {
//     let params = {
        
//     }



// }
// sendMail('athulmekkoth22@gmail.com','hau',"sss")

import amqplib from "amqplib"
import AWS from 'aws-sdk';
import { Request, Response, NextFunction } from 'express';
//rabbitmq_publisher
interface Email {
    to: string;
    subject: string;
    body: string;
}
const PublishMessage=async(req: Request, res: Response, next: NextFunction)=>{
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('email-queue');
        console.log('Connected to RabbitMQ successfully.');
      } catch (err) {
        console.error('Error connecting to RabbitMQ:', err);
      }
}


//consumer



const SES_CONFIG = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
};

const SENDER_EMAIL = process.env.SENDER_EMAIL;

if (!SENDER_EMAIL) {
    console.error("SENDER_EMAIL environment variable is not set.");
    process.exit(1); 
}

const AWS_SES = new AWS.SES(SES_CONFIG);

const sendMail = async (req: Request, res: Response, next: NextFunction) => {
    const { to, subject, body }: Email = req.body;

    const params = {
        Source: SENDER_EMAIL,
        Destination: {
            ToAddresses: [to],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: body, 
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
        const data = await AWS_SES.sendEmail(params).promise();
        console.log(data);
        res.status(200).json({ message: 'Email sent successfully', data });
    } catch (err: any) {
        console.error(err.message);
        res.status(500).json({ message: 'Failed to send email', error: err.message });
    }
};

export default sendMail;
