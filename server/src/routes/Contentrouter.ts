import { createMail} from "../controllers/Contentcontroller";
import { Router } from "express";

import isAuth from "../utils/isAuth";
const contentrouter=Router();

   
contentrouter.post('/create',isAuth,createMail);  
export default contentrouter;