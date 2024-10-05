import { channel } from "../config/rabbitMq";
import amqplib, { Channel, Connection } from 'amqplib';
import { LOG_QUEUE } from "../Constants";
import { logID } from "../middleware/LogggerId";
import { LogObject } from "../types/log.types";

export const publishLog = (logid: string, logMessage: string, logObject: LogObject, type: 'log' | 'error')=>
{
    const log = { logid, logMessage, logObject, type, createdAt: new Date() }
    channel.sendToQueue(LOG_QUEUE, Buffer.from(JSON.stringify(log)));

}

export const logMsg = (logid: string, logMessage: string, logObject: any) => {
    publishLog(logid, logMessage, logObject, 'log')


}
export const logError = (logid: string, logMessage: string, logObject: any) => {
    publishLog(logid, logMessage, logObject, 'error')
}