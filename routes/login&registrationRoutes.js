import { loginUser,registerUser } from "../Controller/login&registrationControler.js";
import { authenticateUser } from "../middleware/auth.js";
import express from "express";

const authRouter = express.Router();

authRouter.post('/login', authenticateUser, loginUser);
authRouter.post('/register', authenticateUser, registerUser);

export default authRouter;