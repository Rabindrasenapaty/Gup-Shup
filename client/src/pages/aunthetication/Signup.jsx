import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useEffect } from 'react';

import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { registerUserThunk } from '../store/slice/user/user.thunk';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';

const Signup = () => {

  const dispatch = useDispatch()
  const navigate=useNavigate()
   const {isAuthenticated}=useSelector((state)=>state.user)

  const [signupData, setsignupData] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })
   useEffect(()=>{
      if(isAuthenticated) navigate('/')
    },[isAuthenticated])

  const handleInputChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value);
    setsignupData({
      ...signupData,
      [e.target.name]: e.target.value
    })
    console.log(signupData);
  }

  const handelRegister = async() => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and Confirm Password do not match")
    }

    const response=await dispatch(registerUserThunk(signupData))
    console.log(response);
    
    if (response?.payload?.success){
      navigate("/")
    }

  }


  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center bg-blue-950 max-w-[40rem] w-full p-6 rounded-2xl text-white">
        <h2 className='text-2xl font-bold text-white'>Please signup</h2>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaUser />
          <input type="text" className="grow outline-none" placeholder="Full Name" onChange={handleInputChange} name='fullName' />
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaUser />
          <input type="text" className="grow outline-none" placeholder="Username" onChange={handleInputChange} name='username' />
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaEye />
          <input type="password" className="grow outline-none" placeholder="Password" onChange={handleInputChange} name='password' />
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaEye />
          <input type="password" className="grow outline-none" placeholder="Confirm Password" onChange={handleInputChange} name='confirmPassword' />
        </label>
<div className="input flex items-center gap-4 p-3 m-3 bg-white text-black rounded-md w-full">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={signupData.gender === 'male'}
              onChange={handleInputChange}
              className="radio radio-primary" // This is a good way to style the checked state color
            />
            Male
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={signupData.gender === 'female'}
              onChange={handleInputChange}
              className="radio radio-secondary" // This is a good way to style the checked state color
            />
            Female
          </label>
        </div>

        <button className="btn btn-primary" onClick={handelRegister}>Submit</button>
        <p>Already have an Account? &nbsp;
          <Link to='/login' className='text-blue-500 underline'>Login</Link>
        </p>
      </div>
    </div>

  )
}
export default Signup