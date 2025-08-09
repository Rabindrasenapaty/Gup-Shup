import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getOtherUserThunk, getprofileUserThunk, loginUserThunk } from './pages/store/slice/user/user.thunk'

function App() {

 
  const dispatch = useDispatch()
  // console.log(isAuthenticated);

  useEffect(() => {
    (async()=>{
    await dispatch(getprofileUserThunk())
    
    })()
  },[])

  return (
    <>


      <Toaster
        position="top-center"
        reverseOrder={false}
      />

    </>
  )
}

export default App
