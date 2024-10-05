import { Channel } from 'amqplib';
import { channel, connectRabbitMQ } from "../config/rabbitMq";
import { LOG_QUEUE } from "../Constants";
import startConsumer from "../rabbitMQ/consumer";

export const startLogConsumer = async () => {
    await connectRabbitMQ();
    
    channel.consume(LOG_QUEUE, async (msg: any) => { 
        if (msg !== null) {
            const logData = JSON.parse(msg.content.toString());
            console.log(logData);
            channel.ack(msg);
        }
    });
}

startConsumer().catch(err => console.log("failed to consume"));
