import { createSlice } from '@reduxjs/toolkit'
import { getmessagethunk, sendmessagethunk } from './message.thunk';





export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        messages:[]
        
    },
    reducers: {
       setNewMessage:(state,action)=>{
        const oldMessages=state.messages ?? []
        state.messages=[...state.messages,action.payload]
       }
    },
    extraReducers: (builder) => {

        //send Message
     
        builder.addCase(sendmessagethunk.pending, (state) => {});
        builder.addCase(sendmessagethunk.fulfilled, (state, action) => {
            state.messages=[...state.messages,action.payload?.responsedata]
        });
        builder.addCase(sendmessagethunk.rejected, (state) => {});



        //get message
        builder.addCase(getmessagethunk.pending, (state) => {});
        builder.addCase(getmessagethunk.fulfilled, (state, action) => {
            console.log(action.payload);
            state.messages=action.payload?.responsedata?.messages   
        });
        builder.addCase(getmessagethunk.rejected, (state) => {});

 

    }
})
// Action creators are generated for each case reducer function
export const {setNewMessage} = messageSlice.actions

export default messageSlice.reducer