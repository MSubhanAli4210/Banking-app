import express from 'express';
import { register, login, logout } from '../controllers/authController.js';

export const AuthRouter = express.Router();

AuthRouter.post("/register", register);
AuthRouter.post("/login", login);
AuthRouter.post("/logout", logout);



