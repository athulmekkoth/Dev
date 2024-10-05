var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import amqp from "amqplib";
import { LOG_QUEUE, EMAIL_QUEUE } from "../Constants";
let channel; // Declare channel globally
const connectRabbitMQ = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const connection = yield amqp.connect(process.env.RABBITMQ_URI);
        channel = yield connection.createChannel(); // Assign channel
        yield channel.assertQueue(LOG_QUEUE);
        yield channel.assertQueue(EMAIL_QUEUE);
        console.log("Connected to RabbitMQ");
        // Further logic...
    }
    catch (err) {
        console.log("Error connecting to RabbitMQ:", err);
    }
});
export { connectRabbitMQ, channel }; // Export channel and connectRabbitMQ
