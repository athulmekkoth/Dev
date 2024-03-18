import { createPost,getPost } from "../controllers/Contentcontroller/Contentcontroller";
import { Router } from "express";
import { verifyToken } from "../utils/token";
import isAuth from "../utils/isAuth";
const contentrouter=Router();

contentrouter.get('/getdata',getPost);    
contentrouter.post('/create',createPost);  
export default contentrouter;