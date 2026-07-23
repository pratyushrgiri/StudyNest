import { error } from "console";
import{
createAccount,
findUserByEmail,
validateUserCredentials,
updateUserPassword,
deleteUserByEmail
}from "../services/userServices.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  // Add login logic here
};

export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const fullname= firstName+ ' '+ lastName;
  try {


    await createAccount(fullname,email,password);
    res.redirect("/");

} catch (err) {

    if (err.code === 11000) {
        return res.status(409).json({
            success: false,
            message: "Email already registered."
        });
    }

    console.error(err);

    res.status(500).json({
        success: false,
        message: "Something went wrong."
    });
}

};
