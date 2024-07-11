import AWS from 'aws-sdk';

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
console.log(SES_CONFIG)
const AWS_SES = new AWS.SES(SES_CONFIG);

const sendMail = async (to:string, subject:string, body:string) => {
    let params = {
        Source: SENDER_EMAIL,
        Destination: {
            ToAddresses: [to],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: '<h1>HTML</h1>'
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
        let data = await AWS_SES.sendEmail(params).promise();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }
};

sendMail('athulmekkoth22@gmail.com', 'hau', "sss");
