import React, { useState } from 'react'

import { FaUser } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const Signup = () => {


  const [signupData,setsignupData]=useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:''
  })

    const handleInputChange=(e)=>{
    console.log(e.target.name)
    console.log(e.target.value);
    setsignupData({...signupData,
      [e.target.name]:e.target.value
    })
    console.log(signupData);
    
    
    
  }
  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center bg-blue-950 max-w-[40rem] w-full p-6 rounded-2xl text-white">
        <h2 className='text-2xl font-bold text-white'>Please signup</h2>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaUser />
          <input type="text" className="grow outline-none" placeholder="Full Name" onChange={handleInputChange} name='fullName'/>
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaUser />
          <input type="text" className="grow outline-none" placeholder="Username" onChange={handleInputChange} name='username'/>
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaEye />
          <input type="password" className="grow outline-none" placeholder="Password" onChange={handleInputChange} name='password'/>
        </label>
        <label className="input flex items-center gap-2 p-3 m-3 bg-white text-black rounded-md w-full">
          <FaEye />
          <input type="password" className="grow outline-none" placeholder="Confirm Password" onChange={handleInputChange} name='confirmPassword'/>
        </label>
        <button className="btn btn-primary">Submit</button>
        <p>Already have an Account? &nbsp;
          <Link to='/login' className='text-blue-500 underline'>Login</Link>
        </p>
      </div>
    </div>

  )
}
export default Signup