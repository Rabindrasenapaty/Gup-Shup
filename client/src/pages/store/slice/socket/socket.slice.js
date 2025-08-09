import { createSlice } from '@reduxjs/toolkit'
import { io } from 'socket.io-client';






export const socketSlice = createSlice({
    name: 'socket',
    initialState: {
        socket: null,
        onlineUsers:null,

    },
  reducers: {
    initializeSocket: (state, action) => {
      const socket = io(import.meta.env.VITE_DB_ORIGIN, {
        query: { userId: action.payload }
      });

      state.socket = socket;

      // Listen for online users (optional, or move to component with useEffect)
      socket.on('onlineUsers', (onlineUsers) => {
        // You cannot directly mutate state inside async listener
        // So you'll need to dispatch an action instead in a thunk/component
        console.log('Online Users from socket:', onlineUsers);
      });
    },

    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
  }
});
// Action creators are generated for each case reducer function
export const { initializeSocket,setOnlineUsers } = socketSlice.actions

export default socketSlice.reducer