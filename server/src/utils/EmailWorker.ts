// import dotenv from 'dotenv';
// import amqplib, { Channel, Connection } from 'amqplib';
// import sendMails from './EmailService';

// dotenv.config();

// const queue = 'email-task';
// const open: Promise<Connection> = amqplib.connect(process.env.AMQP_SERVER as string);

// // Publisher
// export const publishMessage = async (payload: any): Promise<void> => {
//     try {
//         console.log(process.env.AMQP_SERVER)
//         const connection = await open;
//         const channel: Channel = await connection.createChannel();
//         await channel.assertQueue(queue);
//         channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)));
//         await channel.close();
//         console.log("publisher callled")
//     } catch (error) {
//         console.warn('Error publishing message:', error);
//     }
// };

// // Consumer
// export const consumeMessage = async (): Promise<void> => {
//     console.log("consumer")
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
