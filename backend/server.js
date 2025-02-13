import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
dotenv.config({});
import bookingsRoutes from './routes/bookingsRoute.js';
import authRoutes from "./routes/authRoutes.js";


const app = express();
app.use(cors({
  origin: "http://localhost:5173", 
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(express.json());

app.use(cookieParser());

app.use('/api', bookingsRoutes);
app.use("/api/auth", authRoutes);

mongoose.connect(
  process.env.MONGODB_URI
).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
})


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
