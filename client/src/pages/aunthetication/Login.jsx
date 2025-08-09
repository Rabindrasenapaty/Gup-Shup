import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../store/slice/user/user.thunk';
import { useNavigate } from "react-router";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';




const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
   const {isAuthenticated}=useSelector((state)=>state.user)

  useEffect(()=>{
    if(isAuthenticated) navigate('/')
  },[isAuthenticated])


  const [loginData, setLoginData] = useState({
    username: "",
    password: ""
  })

  const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value);
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })


  }
  const handelLogin = async () => {
    console.log("login");

    const response = await dispatch(loginUserThunk(loginData))
    if (response?.payload?.success) {
      navigate("/")
    }


  }


  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center bg-blue-950 max-w-[40rem] w-full p-6 rounded-2xl text-white">
        <h2 className='text-2xl font-bold text-white'>Please Login</h2>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaUser />
          <input type="text" className="grow outline-none" placeholder="Username" name="username" onChange={handleInputChange} />
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaEye />
          <input name="password" type="password" className="grow outline-none" placeholder="Password" onChange={handleInputChange} />
        </label>
        <button onClick={handelLogin} className="btn btn-primary">Submit</button>
        <p>Dont have an account? &nbsp;
          <Link to='/signup' className='text-blue-500 underline'>Signup</Link>
        </p>
      </div>
    </div>

  )
}

export default Login