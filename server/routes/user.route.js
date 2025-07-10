import express from 'express'
import { login } from '../controllers/user.controller.js';
import { register } from '../controllers/user.controller.js';
const router=express.Router();

router.post('/login',login)
router.post('/register',register)

export default router