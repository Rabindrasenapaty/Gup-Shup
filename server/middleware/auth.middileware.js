import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import  ErrorHandler from "../utilities/errorHandler.utility.js";
import jwt from "jsonwebtoken";

export const isAuthenticated=asyncHandler(async (req,res,next)=>{
    const token=req.cookies.token || req.headers["authorization"]?.replace("Bearer ","")
    // console.log("Extracted Token:", token);
    // console.log("Raw cookie token value:", req.cookies.token);

    if (!token) {
    return next(new ErrorHandler("Invalid token", 400));
}
    const tokenData=jwt.verify(token,process.env.JWT_SECRET)
    console.log("token data",tokenData?._id)
    req.user=tokenData
    next()
    })