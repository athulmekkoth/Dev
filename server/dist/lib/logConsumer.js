var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { channel, connectRabbitMQ } from "../config/rabbitMq";
import { LOG_QUEUE } from "../Constants";
import startConsumer from "../rabbitMQ/consumer";
export const startLogConsumer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield connectRabbitMQ();
    channel.consume(LOG_QUEUE, (msg) => __awaiter(void 0, void 0, void 0, function* () {
        if (msg !== null) {
            const logData = JSON.parse(msg.content.toString());
            console.log(logData);
            channel.ack(msg);
        }
    }));
});
startConsumer().catch(err => console.log("failed to consume"));
