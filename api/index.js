import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import hotelRoute from './routes/hotel.js';
import roomRoute from './routes/room.js';
import usersRoute from './routes/users.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';
const app=express();
dotenv.config()                                     //To use variables in .env file.

const connect=async()=>{                            //Connection to DB at the first time.
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Database")
    } catch (error) {
        throw(error)
    }
}
mongoose.connection.on("disconnected",()=>{
    console.log("Mongodb disconnected!");
})
mongoose.connection.on("connected",()=>{
    console.log("Mongodb Connected!");
})

//Middlewares:

app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use('/api/auth',authRoute);
app.use('/api/hotel',hotelRoute);
app.use('/api/room',roomRoute);
app.use('/api/users',usersRoute);

//Error Handler
app.use((err,req,res,next)=>{
    const errstatus=err.status || 500;
    const errmessage=err.message ||"not working";
    res.status(errstatus).json({
        success:false,
        status:errstatus,
        message:errmessage,
        stack:err.stack,
    });
})

//Port listen
app.listen(8000,()=>{                               //Connection to the backend (port 8000).
    connect();
    console.log("Connected to the backend");
})