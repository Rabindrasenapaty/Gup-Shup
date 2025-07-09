import { useEffect, useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk } from './pages/store/slice/user/user.thunk'

function App() {

  const {isAuthenticated}=useSelector(state=>state.useReducer)
  const dispatch=useDispatch()
  // console.log(isAuthenticated);

  useEffect(()=>{
    dispatch(loginUserThunk())
  })
  
  return (
    <>
      {/* <h1 className='bg-red-500 '>hello how are you</h1>
      <button className="btn btn-active btn-info">Info</button>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
        
      </Routes> */}


  
    </>
  )
}

export default App
