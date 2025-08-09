import User from "../models/user.model.js"
import ErrorHandler from "../utilities/errorHandler.utility.js";
import { asyncHandler } from "../utilities/asyncHandler.utility.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = asyncHandler(async (req, res, next) => {

    const { fullName, username, password, gender } = req.body;

    if (!fullName || !username || !password) {

        return next(new ErrorHandler("All fields are required", 400))
    }
    const user = await User.findOne({ username })
    if (user) {
        return next(new ErrorHandler("user alreadu exist", 400))
    }
    const avatarType = gender === "male" ? "boy" : "girl"
    const avatar = `https://avatar.iran.liara.run/public/${avatarType}?username=${username}`

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
        username,
        fullName,
        password: hashedPassword,
        gender,
        avatar
    })
    const tokenData = {
        _id: newUser?._id
    }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })

    res.status(200)
    res.cookie("token", token, {
        httpOnly: true,
        secure:true,
        sameSite: 'None',
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
    })

        .json({
            success: true,
            responseData: {
                newUser,
                token
            }

        })
    res.send("hello regsiter")
});

export const login = asyncHandler(async (req, res, next) => {

    const { username, password } = req.body;

    if (!username || !password) {

        return next(new ErrorHandler("All fields are required", 400))
    }
    const user = await User.findOne({ username })
    if (!user) {
        return next(new ErrorHandler("Please enter a valid username or password", 400))
    }



    const isvalidPassword = await bcrypt.compare(password, user.password)
    if (!isvalidPassword) {
        return next(new ErrorHandler("Please enter a valid username or passowrd", 400))
    }

    const tokenData = {
        _id: user?._id
    }
    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })



    res.status(200)
        .cookie("token", token, {
            expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: "None"
        })


        .json({
            success: true,
            responseData: {
                user,
                token
            }

        })
    res.send("hello regsiter")
});


export const getprofile = asyncHandler(async (req, res, next) => {
    const userId = req.user._id

    const profile = await User.findById(userId)

    res.status(200).json({
        success: true,
        responseData: profile
    })

});

export const logout = asyncHandler(async (req, res, next) => {
    res.status(200)
        .cookie("token", "", {
            expiresIn: (Date.now()),
            httpOnly: true
        })
        .json({
            success: true,
            mesage: "logout succesfull"
        })
})

export const getOtherUser = asyncHandler(async (req, res, next) => {
    const otherusers = await User.find({ _id: { $ne: req.user.Id } })
    res.status(200)
        .json({
            success: true,
            responsedata: otherusers
        })

})






