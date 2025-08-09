import ErrorHandler from "../utilities/errorHandler.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";
import {getSocketId, io} from "../socket/socket.js"


export const sendMessage = asyncHandler(async (req, res, next) => {

    const senderId = req.user._id
    const receiverId = req.params.receiverId
    const message = req.body.message
    console.log(senderId, receiverId, message);



    if (!senderId || !receiverId || !message) {
        return next(new ErrorHandler("all fields are requiered", 400))
    }

    let conversation = await Conversation.findOne(
        {
            participants: { $all: [senderId, receiverId] },
        });

    if (!conversation) {
        conversation = await Conversation.create({
            participants: [senderId, receiverId]
        })
    }

    const newMessage = await Message.create({
        senderId,
        receiverId,
        message
    })
    console.log(conversation.messages);


    if (newMessage) {
        conversation.messages.push(newMessage._id)
        await conversation.save();
    }

    //socket.io
    const socketId=getSocketId(receiverId)

    io.to(socketId).emit("newMessage",newMessage)



    res.status(200).json({
        success: true,
        responsedata: newMessage
    });



})


export const getMessage = asyncHandler(async (req, res, next) => {
    const myId = req.user._id;
    const otherparticipantId = req.params.otherparticipantId;
    console.log(myId, otherparticipantId);

    if (!myId || !otherparticipantId) {
        return next(new ErrorHandler("Required user IDs are missing", 400));
    }

    let conversation = await Conversation.findOne({
        participants: { $all: [myId, otherparticipantId] },
    }).populate("messages");
    // Handle if no conversation exists yet
    if (!conversation) {
        return res.status(200).json({
            success: true,
            responsedata: {
                messages: [] // ✅ return empty array
            }
        });
    }

    res.status(200).json({
        success: true,
        responsedata:conversation,
    });
});
