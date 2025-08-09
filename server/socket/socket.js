import dotenv from 'dotenv'
dotenv.config()
import { createServer } from 'node:http';
import http from 'http'
import express from 'express'
import { Server } from 'socket.io';


const app = express()

const server = http.createServer(app)


const io = new Server(server,
    {
        cors: {
            origin: process.env.CLIENT_URL,
        }
    })

    const userSocketMap={
        //userId :socketId
    }

io.on("connection", (socket) => {
    // console.log(socket.id);
    // console.log(socket.handshake.query.userId)
    const userId=socket.handshake.query.userId
    if(!userId)return;

    userSocketMap[userId]=socket.id

    console.log(Object.keys(userSocketMap))

    io.emit("onlineUsers",Object.keys(userSocketMap))

    socket.on("disconnect",()=>{
        delete userSocketMap[userId]
        io.emit("onlineUsers",Object.keys[userSocketMap])
    })


})

const getSocketId=(userId)=>{
    return userSocketMap[userId]
}

export { io, app, server,getSocketId}