import amqp, { Channel } from "amqplib";
import { LOG_QUEUE, EMAIL_QUEUE } from "../Constants";
import { v4 as uuidv4 } from 'uuid';

let channel: Channel;  // Declare channel globally

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URI!);
    channel = await connection.createChannel();  // Assign channel
    await channel.assertQueue(LOG_QUEUE);
    await channel.assertQueue(EMAIL_QUEUE);
    console.log("Connected to RabbitMQ");
    
    // Further logic...
  } catch (err) {
    console.log("Error connecting to RabbitMQ:", err);
  }
};

export { connectRabbitMQ, channel };  // Export channel and connectRabbitMQ