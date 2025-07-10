import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import { connectDB } from './db/connection1.db.js'
connectDB();

const app=express()
app.use(express.json())

const PORT=process.env.PORT||5000

//routes
import userRoute from './routes/user.route.js'
app.use('/api/v1/user',userRoute)

//middileware
import { errorMiddileware } from './middleware/error.middileware.js';
app.use(errorMiddileware)


app.get('/',(req,res,next)=>{
    res.send("hello world")
})

app.listen(PORT,()=>{
    console.log("server started");
    
})