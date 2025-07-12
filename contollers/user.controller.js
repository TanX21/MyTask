import jwt from 'jsonwebtoken';
import User from '../model/user.model.js';

const SECRET_KEY = "12345679ABCD";

const generateToken = (userId) => {
    return jwt.sign({ id: userId}, SECRET_KEY,{ expiresIn: '1d'});
};

export const signup = async (req, res) => {
    const {firstname, lastname, email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email});
        if(existingUser)
            return res.status(400).json({ message: 'User Already Exists'});

        const user = new User ({
            firstname,
            lastname,
            email,
            password
        });
        await user.save();

        const token = generateToken(user._id);
        
        res.status(201).json({ message: 'Signup Successful', user, token});

    } catch (err) {
        res.status(500).json({ message: 'Signup failed', error: err.message });
    }
};

export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });

        if(!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid Details'});
        }

        const token = generateToken(user._id);

        res.status(200).json({ message: ' Login Successful', user, token});

    } catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message });
    }
};

export const resetPassword = async (req, res) => {
    const { email, newPassword } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user)
            return res.status(404).json({message: ' User not found'});

        user.password = newPassword;
        await user.save();

        res.status(200).json({ message: ' Password Reset Successfully '});
    }
    catch (err) {
        res.status(500).json({ message: 'failed', error: err.message });
    }
};