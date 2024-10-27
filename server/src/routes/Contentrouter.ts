import { createMail,getMail} from "../controllers/Contentcontroller";
import { Router } from "express";

import {isAuth } from "../utils/isAuth";
import { authMidleWare } from "../middleware/authMiddleWare";
import { checkPermission } from "../middleware/roleMiddleWare";
import { rateLimiter } from "../middleware/rateLimiter";
const contentrouter=Router();

   
contentrouter.post('/create',authMidleWare,rateLimiter,checkPermission("create"),createMail);  
contentrouter.get('/getall',isAuth,getMail)
export default contentrouter;