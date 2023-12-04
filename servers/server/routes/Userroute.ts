import express, { Express, Request, Response } from 'express';
import {UserRegister,UserLogin,protectedRoute,UserRefreshToken, UserLogout} from '../components/Usercomponent';

const UserRouter = express.Router();
UserRouter.post('/register', UserRegister);
UserRouter.post('/login', UserLogin);
UserRouter.post('/protect', protectedRoute);
UserRouter.post('/refresh', UserRefreshToken);
UserRouter.post('/logout', UserLogout);
export default UserRouter;

