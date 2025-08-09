import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosinstance } from "../../../../components/utilities/axiosInstance";

export const loginUserThunk = createAsyncThunk("user/login", async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await axiosinstance.post('/user/login', {
            username,
            password
        })

        if (response?.data?.success) {
            toast.success("Login successful");
            // Navigate or do further actions here
        }
        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})
export const registerUserThunk = createAsyncThunk("user/register", async ({ fullName,username,password,gender }, { rejectWithValue }) => {
    console.log(fullName,username,password,gender);
    
    try {
        const response = await axiosinstance.post('/user/register', {
            fullName,
            username,
            password,
            gender
        })
        toast.success("Account created successfully")
        console.log(response)
        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})

export const getprofileUserThunk = createAsyncThunk("user/getprofile", async (_, { rejectWithValue }) => {
   
    
    try {
        const response = await axiosinstance.get('/user/getprofile')
       
        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})
export const logoutrUserThunk = createAsyncThunk("user/logout", async (_, { rejectWithValue }) => {
   
    
    try {
        const response = await axiosinstance.post('/user/logout')
        toast.success("Logout succesfully")
        console.log(response)
        localStorage.clear()
        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})

export const getOtherUserThunk = createAsyncThunk("user/getOtherUsers", async (_, { rejectWithValue }) => {
   
    
    try {
        const response = await axiosinstance.get('/user/getOtherUsers')
       
        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})