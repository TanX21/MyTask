import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tanmay213:pded0WfRZX1buaEP@cluster2.1dna9.mongodb.net/myPractice');
        console.log('MongoDB Connected');
        
    } catch (err) {
        console.error(' MongoDb Connection Failed');
        
    }
};

export default connectDB;