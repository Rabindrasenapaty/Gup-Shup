import ErrorHandler from "../utilities/errorHandler.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import Message from "../models/message.model.js";
import Conversation from "../models/conversation.model.js";


export const sendMessage = asyncHandler(async (req, res, next) => {

    const senderId = req.user._id
    const receiverId = req.params.receiverId
    const message = req.body.message
    console.log(senderId,receiverId,message);
    


    if (!senderId || !receiverId || !message) {
        return next(new ErrorHandler("all fields are requiered", 400))
    }

    let conversation=await Conversation.findOne(
        {participants:{ $all:[senderId,receiverId]},
    });

    if(!conversation){
        conversation=await Conversation.create({
            participants:[senderId,receiverId]
        })
    }
    
    const newMessage=await Message.create({
        senderId,
        receiverId,
        message
    })
    console.log(conversation.messages);
    

    if(newMessage){
        conversation.messages.push(newMessage._id)
        await conversation.save();
    }

    //socket.io




    res.status(200).json({
        success:true,
        responsedata:newMessage
    });



})


export const getMessage = asyncHandler(async (req, res, next) => {

    const myId = req.user._id
    const otherparticipantId = req.params.otherparticipantId
    console.log(myId,otherparticipantId);
    
    const message = req.body.message
    console.log(message);
    
    
    


    if (!myId || !otherparticipantId || !message) {
        return next(new ErrorHandler("all fields are requiered", 400))
    }

    let conversation=await Conversation.findOne(
        {participants:{ $all:[myId,otherparticipantId]},
    }).populate("messages")

 
    


    //socket.io




    res.status(200).json({
        success:true,
        responsedata:conversation
    });



})