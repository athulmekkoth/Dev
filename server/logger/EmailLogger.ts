import winston, { format } from 'winston';
const { combine, printf, timestamp } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

export const EmailLogger = () => {
    return winston.createLogger({
        level: 'info',
        format: combine(
            format.colorize(),
            timestamp({format:"HH:mm:ss"}),
            myFormat
        ),
        transports: [
            new winston.transports.Console()
        ],
    });
};

export default EmailLogger
