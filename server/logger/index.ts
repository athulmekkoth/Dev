import {EmailLogger} from './EmailLogger'
let logger=null
if(process.env.NODE_ENV != "production"){
    logger=EmailLogger()
}
module.exports=logger