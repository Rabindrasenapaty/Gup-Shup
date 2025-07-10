import User from "../models/user.model.js"
import { errorhandler } from "../utilities/errorHandler.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import bcrypt from 'bcrypt'

export const register=asyncHandler(async(req,res,next)=>{
    
        const {fullName,username,password,gender}=req.body;

        if(!fullName|| !username|| !password){

            return next(new errorhandler("All fields are required",400))
        }
        const user=await User.findOne({username})
        if (user){
            return next(new errorhandler("user alreadu exist",400))
        }
        const avatarType=gender==="male"?"boy":"girl"
        const avatar=`https://avatar.iran.liara.run/public/${avatarType}?username=${username}`

        const hashedPassword=await bcrypt.hash(password,10)

        const newUser=await User.create({
            username,
            fullName,
            password:hashedPassword,
            gender,
            avatar
        })

        res.status(200).json({
            success:true,
            responseData:{
                newUser
            }

        })
        res.send("hello regsiter")
        });

export const login=asyncHandler(async(req,res,next)=>{
    
        const {username,password}=req.body;

        if( !username|| !password){

            return next(new errorhandler("All fields are required",400))
        }
        const user=await User.findOne({username})
        if (!user){
            return next(new errorhandler("Please enter a valid username or password",400))
        }

  

        const isvalidPassword=await bcrypt.compare(password,user.password)
        if(!isvalidPassword){
            return next(new errorhandler("Please enter a valid username or passowrd",400))
        }



  

        res.status(200).json({
            success:true,
            responseData:{
                user
            }

        })
        res.send("hello regsiter")
        });



  

        
    

