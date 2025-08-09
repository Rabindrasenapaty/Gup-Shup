import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosinstance } from "../../../../components/utilities/axiosInstance";

export const sendmessagethunk = createAsyncThunk("message/send", async ({ receiverId, message }, { rejectWithValue }) => {
    try {
        if (!receiverId || !message) {
            return rejectWithValue("Receiver ID or message is missing");
        }
        const response = await axiosinstance.post(`/message/send/${receiverId}`, {
            message
        })
        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})
export const getmessagethunk = createAsyncThunk("message/get", async ({ receiverId }, { rejectWithValue }) => {
    try {
        if (!receiverId ) {
            return rejectWithValue("Receiver ID is missing");
        }
        const response = await axiosinstance.get(`/message/get-message/${receiverId}`)


        return response.data

    } catch (error) {
        console.log(error);

        const errorOutput = error?.response?.data?.errMessage
        toast.error(errorOutput)

        return rejectWithValue(errorOutput)
    }

})
