import mongoose from "mongoose";

const Users= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const UserModel= mongoose.model("Users",Users);
export default UserModel;