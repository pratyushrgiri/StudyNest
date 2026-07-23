import { error } from "console";
import {
    createAccount,
    findUserByEmail,
    validateUserCredentials,
    updateUserPassword,
    deleteUserByEmail
} from "../services/userServices.js";

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await validateUserCredentials(email, password);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Login successful."
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
};

export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const fullname = `${firstName} ${lastName}`;

    try {
        const user = await findUserByEmail(email);

        if (user) {
            return res.status(409).json({
                success: false,
                message: "Email already registered."
            });
        }
        await createAccount(fullname, email, password);

        return res.status(201).json({
            success: true,
            message: "Registration successful."
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: "Something went wrong."
        });
    }
};