import {app,server } from './socket/socket.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'


import { connectDB } from './db/connection1.db.js'
connectDB();



app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials: true

}
))
app.use(express.json())
app.use(cookieParser())

const PORT=process.env.PORT||5000

//routes
import userRoute from './routes/user.route.js'
import  MessageRoute from './routes/message.route.js'
app.use('/api/v1/user',userRoute)
app.use('/api/v1/message',MessageRoute)

//middileware
import { errorMiddileware } from './middleware/error.middileware.js';
app.use(errorMiddileware)


app.get('/',(req,res,next)=>{
    res.send("hello world")
})

server.listen(PORT,()=>{
    console.log("server started");
    
})