import { createSlice } from '@reduxjs/toolkit'
import { loginUserThunk } from './user.thunk'




export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginUserThunk.pending, (state, action) => {
            // Add user to the state array
            console.log("pending");

        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("fulfilled");

        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            // Add user to the state array
            console.log("rejected");

        });
    }
})
// Action creators are generated for each case reducer function
export const { } = userSlice.actions

export default userSlice.reducer