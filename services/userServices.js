import User from "../models/userModel.js";
export const allAccounts= async()=>{
    try{
        const users= await User.find();
        return users;
    }
    catch(err){
        console.error("Error fetching users:", err);
        throw err;
    }
}

export const createAccount= async(name,email,password)=>{
    try{
        const newUser= new User({name,email,password});
        await newUser.save();
        return newUser;
    }
    catch(err){
        console.error("Error creating user:", err);
        throw err;
    }
}

export const findUserByEmail= async(email)=>{
    try{
        const user= await User.findOne({email});
        return user;
    }
    catch(err){
        console.error("Error finding user:", err);
        throw err;
    }
}

export const validateUserCredentials= async(email,password)=>{
    try{
        const user= await User.findOne({email,password});
        return user;
    }
    catch(err){
        console.error("Error validating user credentials:", err);
        throw err;
    }
}

export const updateUserPassword= async(email,newPassword)=>{
    try{
        const updatedUser= await User.findOneAndUpdate({email},{password:newPassword},{new:true});
        return updatedUser;
    }
    catch(err){
        console.error("Error updating user password:", err);
        throw err;
    }
}

export const deleteUserByEmail= async(email)=>{
    try{
        const deletedUser= await User.findOneAndDelete({email});
        return deletedUser;
    }
    catch(err){
        console.error("Error deleting user:", err);
        throw err;
    }
}

export const changeUserName= async(email,newName)=>{
    try{
        const updatedUser= await User.findOneAndUpdate({email},{name:newName},{new:true});
        return updatedUser;
    }
    catch(err){
        console.error("Error updating user name:", err);
        throw err;
    }
}