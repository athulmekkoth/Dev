import dotenv from 'dotenv';
dotenv.config()
import amqplib, { Channel, Connection } from 'amqplib';

const connectionString = process.env.AMQP_CONNECTION_STRING as string;

if (!connectionString) {
  throw new Error('AMQP_CONNECTION_STRING environment variable is not set.');
}

const open: Promise<Connection> = amqplib.connect(connectionString);
var queue = "Email-Queue"
interface Email{
    to: string;
    subject: string;
    body: string;

}
// Publisher
const publishMessage = (payload:Email) =>

  open
    .then((connection:Connection) => {
      connection.createChannel().then((channel) =>
        channel.assertQueue(queue).then(() => {
          channel.sendToQueue(queue, Buffer.from(JSON.stringify(payload)))
        })
      )
    })
   
    .catch((error:any) => console.warn(error))


    export default publishMessage
