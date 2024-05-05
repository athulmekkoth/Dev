import AWS from 'aws-sdk';

const SES_CONFIG={
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}
const AWS_SES=new AWS.SES(SES_CONFIG);
const sendMail = async (to: string, subject: string, body: string) => {
    let params = {
        
    }



}
sendMail('athulmekkoth22@gmail.com','hau',"sss")