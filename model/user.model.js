import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
    },
    lastname:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
},
{timestamps: true });

const User = mongoose.model('User' , userSchema);

export default User;