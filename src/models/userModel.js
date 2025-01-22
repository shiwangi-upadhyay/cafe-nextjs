import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "PLease provide an username"],
        unique: true
    },
    email:{
        type: String,
        required: [true, "PLease provide an email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "PLease provide a password"],
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    govId:{
        type: String,
        default: null,
    },
    //membeership 
    membership:{
        type: String,
        default: "free",
    },
    dateJoined:{
        type: Date,
        default: null,
    },

    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date, 
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;