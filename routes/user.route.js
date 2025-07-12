import express from 'express';
import { login, resetPassword, signup } from '../contoller/user.controllers.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/reset-password', resetPassword);

export default router;
