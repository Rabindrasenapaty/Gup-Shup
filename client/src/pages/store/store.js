import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slice/user/user.slice'
import messagereducer from './slice/message/message.slice'
import socketReducer from './slice/socket/socket.slice'


export const store = configureStore({
  reducer: {
    user:useReducer,
    messagereducer,
    socketReducer
  },
middleware: (getDefaultMiddleware) => (
  getDefaultMiddleware({
    serializableCheck: {
      ignoredPaths: ["socketReducer.socket"]
    }
  })
)
  
})