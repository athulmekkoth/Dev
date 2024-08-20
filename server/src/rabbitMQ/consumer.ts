import dotenv from 'dotenv';
import amqplib, { Channel, Connection } from 'amqplib';

// dotenv.config();
// const open = require("amqplib").connect(process.env.AMQP_CONNECTION_STRING)
// const queue = 'email-task';
// export const consumeMessage = async (): Promise<void> => {
//     try {
//         console.log(" consumer started")
//         const connection = await open;
//         const channel: Channel = await connection.createChannel();
//         await channel.assertQueue(queue);
//         console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);

//         channel.consume(queue, async (msg) => {
//             if (msg !== null) {
//                 const { to, subject, body } = JSON.parse(msg.content.toString());
//                 console.log(' [x] Received %s', body);

//                 try {
//                     await sendMails({ to, subject, body });  // Use the updated sendMails
//                     channel.ack(msg);  // Acknowledge the message after successful processing
//                 } catch (error) {
//                     console.warn('Error processing message:', error);
//                     // Optionally, you could choose not to ack the message and let it be retried.
//                 }
//             }
//         });
//     } catch (error) {
//         console.warn('Error consuming message:', error);
//     }
// };

import sendMails from '../utils/EmailService';


const queue = 'Email-Queue';
const connectionString = process.env.AMQP_CONNECTION_STRING as string;

const open: Promise<Connection> = amqplib.connect(connectionString);
console.log("hai")
open
  .then((connection: Connection) => connection.createChannel())
  .then((channel: Channel) => {
    return channel.assertQueue(queue).then(() => {
      console.log(`[*] Waiting for messages in ${queue}. To exit press CTRL+C`);
      channel.consume(queue, async (msg) => {
        if (msg !== null) {
          try {
            const data = JSON.parse(msg.content.toString());
            console.log(` [x] Received: ${JSON.stringify(data)}`);
            
            // Send email via AWS SES
            await sendMails(data);
            channel.ack(msg); // Acknowledge the message after successful processing
            console.log(' [x] Message processed and acknowledged');
          } catch (error) {
            console.error('Error processing message:', error);
            // Optionally, you can reject the message or handle requeueing here
          }
        }
      });
    });
  })
  .catch((error) => {
    console.error('Error setting up RabbitMQ consumer:', error);
  });

// Handle unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

