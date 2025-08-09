import { createSlice } from '@reduxjs/toolkit'
import { getOtherUserThunk, getprofileUserThunk, loginUserThunk, logoutrUserThunk, registerUserThunk } from './user.thunk'




export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        otherusers:null,
        userProfile: null,
        selectedUser:JSON.parse(localStorage.getItem("selectedUser"))
        
    },
    reducers: {
        setSelectedUser:(state,action)=>{
            localStorage.setItem("selectedUser",JSON.stringify(action.payload))
            state.selectedUser=action.payload
        }
    },
    extraReducers: (builder) => {

        //login user
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(loginUserThunk.pending, (state) => {
            //
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            console.log(action.payload);
            state.isAuthenticated=true
            state.userProfile = action.payload?.responseData?.user;
        });
        builder.addCase(loginUserThunk.rejected, (state) => {
            
           //
        });

        //register user
        builder.addCase(registerUserThunk.pending, (state, action) => {
            // Add user to the state array
            console.log("pending");

        });
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("fulfilled");
            state.isAuthenticated=true
            state.userProfile = action.payload?.responseData?.user;

        });
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            // Add user to the state array
            console.log("rejected");

        });

        //logout user
        builder.addCase(logoutrUserThunk.pending, (state, action) => {
            // Add user to the state array
            console.log("pending");

        });
        builder.addCase(logoutrUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("fulfilled");
            state.userProfile=null
            state.isAuthenticated=false
            state.otherusers=null
            state.selectedUser=null
            localStorage.clear()

        });
        builder.addCase(logoutrUserThunk.rejected, (state, action) => {
            // Add user to the state array
            console.log("rejected");

        });

        //get profile
        builder.addCase(getprofileUserThunk.pending, (state, action) => {
            // Add user to the state array
            console.log("pending");

        });
        builder.addCase(getprofileUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("fulfilled");
            // console.log(action.payload?.responseData);
            
            state.userProfile=action.payload?.responseData
            state.isAuthenticated=true

        });
        builder.addCase(getprofileUserThunk.rejected, (state, action) => {
            // Add user to the state array
            console.log("rejected");

        });

        //getotheruser
        builder.addCase(getOtherUserThunk.pending, (state, action) => {
            // Add user to the state array
            console.log("pending");

        });
        builder.addCase(getOtherUserThunk.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("fulfilled");
            
            state.isAuthenticated=true
            // console.log(action.payload.responsedata);
            
            state.otherusers=action.payload?.responsedata

        });
        builder.addCase(getOtherUserThunk.rejected, (state, action) => {
            // Add user to the state array
            console.log("rejected");

        });

    }
})
// Action creators are generated for each case reducer function
export const {setSelectedUser } = userSlice.actions

export default userSlice.reducer