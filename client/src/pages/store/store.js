import { configureStore } from '@reduxjs/toolkit'
import useReducer from './slice/user/user.slice'


export const store = configureStore({
  reducer: {
    useReducer,
  },
  
})