import express from 'express'
import { getOtherUser, getprofile, login,logout } from '../controllers/user.controller.js';
import { register } from '../controllers/user.controller.js';
import { isAuthenticated } from '../middleware/auth.middileware.js';
const router=express.Router();

router.post('/login',login)
router.post('/register',register)
router.get('/getprofile',isAuthenticated,getprofile)
router.get('/getOtherUsers',isAuthenticated,getOtherUser)
router.post('/logout',isAuthenticated,logout)

export default router