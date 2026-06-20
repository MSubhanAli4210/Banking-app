import express from 'express';
import { register, login, logout } from '../controllers/authController.js';
import { validateCredentials } from '../middlewares/credentialCheck.js';

export const AuthRouter = express.Router();

AuthRouter.post("/register", validateCredentials, register);
AuthRouter.post("/login", validateCredentials, login);
AuthRouter.post("/logout", logout);



