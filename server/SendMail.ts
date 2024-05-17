import AWS from 'aws-sdk';

const SES_CONFIG={
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
}
const AWS_SES=new AWS.SES(SES_CONFIG);
const sendMail = async (to: string, subject: string, body: string) => {
    let params = {
        Source: process.env.SENDER_EMAIL,
        Destination:{
            ToAddresses:[
              to,
            ]
        },
        ReplyToAddresses: [],
        Message:{
            Body:{
                Html:{
                    Charset:"UTF-8",
                    Data:'<h1>HTML</h1>'
                
                },
                Text:{
                    Charset:"UTF-8",
                    Data:body
                }
            },
            Subject:{
                Charset:"UTF-8",
                Data:subject
            }
        }

        }
        try{
            let data = await AWS_SES.sendEmail(params).promise();
            console.log(data)
        }
        catch(err){
            console.log(err)
        }

        
    }




sendMail('athulmekkoth22@gmail.com','hau',"sss")

// import { SESClient, ListIdentitiesCommand } from "@aws-sdk/client-ses";
// accessKeyId: process.env.AWS_ACCESS_KEY_ID,
// //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// //     region: process.env.AWS_REGION
// const sesClient = new SESClient({ region: REGION });
//     const paramsForEmail = {
//         Destination: {
//             ToAddresses: [email],
//         },
//         Message: {
//             Body: {
//                 Html: {
//                     Charset: "UTF-8",
//                     Data: `
//                     <p>              
//                       Hello world!
//                     </p>
//                     `
//                 }
//             },
//             Subject: { Data: "Hello World" },
//         },
//         Source: EMAIL_FROM,
//         ReturnPath: EMAIL_RETURN,
//     };