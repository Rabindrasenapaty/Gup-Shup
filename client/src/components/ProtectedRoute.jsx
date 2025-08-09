import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {

    const {isAuthenticated}=useSelector((state)=>state.user)

    const navigate=useNavigate()

    useEffect(()=>{
        console.log(isAuthenticated);
        if (!isAuthenticated){
            navigate('/login')
        }
        
    },[isAuthenticated])
  return children
}

export default ProtectedRoute