import express from 'express';
import { login, resetPassword, signup } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/reset-password', resetPassword);

export default router;
