import React, { useState } from 'react'
import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {

  const [loginData,setLoginData]=useState({
    username:"",
    password:""
  })

  const handleInputChange=(e)=>{
    console.log(e.target.name)
    console.log(e.target.value);
    setLoginData({...loginData,
      [e.target.name]:e.target.value
    })
    
    
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
      <input name="password"type="password" className="grow outline-none" placeholder="Password"  onBlur={handleInputChange}/>
    </label>
    <button className="btn btn-primary">Submit</button>
    <p>Dont have an account? &nbsp;
      <Link to='/signup' className='text-blue-500 underline'>Signup</Link>
    </p>
  </div>
</div>

  )
}

export default Login