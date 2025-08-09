import express from 'express'
import { getMessage, sendMessage } from '../controllers/message.controller.js';
import { isAuthenticated } from '../middleware/auth.middileware.js';
const router=express.Router();


router.post('/send/:receiverId',isAuthenticated,sendMessage)
router.get('/get-message/:otherparticipantId',isAuthenticated,getMessage)


export default router