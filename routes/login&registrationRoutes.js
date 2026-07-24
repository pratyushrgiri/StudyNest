import { loginUser,registerUser,logOutUser } from "../Controller/login&registrationControler.js";
import { authenticateUser } from "../middleware/auth.js";
import express from "express";

const authRouter = express.Router();

authRouter.post('/login', authenticateUser, loginUser);
authRouter.post('/register', authenticateUser, registerUser);
authRouter.get('/logout',logOutUser);

export default authRouter;