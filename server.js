import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './utils/dbconnect.js';
import userRoutes from './routes/user.route.js';


const app = express();
const PORT = 4001;


app.use(cors());
app.use(express.json());
connectDB();


app.get('/', (req, res) => {
    res.send (' Express Server is Running! ');
});

app.use('/api/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at  http://localhost:${PORT}`);
});