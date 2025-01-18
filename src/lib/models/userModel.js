import mongoose from "mongoose";

const { Schema } = mongoose; 
const userSchema  = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    role: {type: String, default:"user", enum: ["user" , "doctor" , "admin"]}, 
    extrainfo:{
        fees:Number ,
        hospital:String,
        time:String,
        bio:String,
        specilization:String,
        gender:String,
    },
}) 

export const userModel =mongoose.models.user || mongoose.model("user" , userSchema);