import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'

const Message = ({messageDetails}) => {
    // console.log(messageDetails);

    const messageRef=useRef(null)
    const  {userProfile,selectedUser}=useSelector(state=>state.user)
    // console.log(userProfile?._id,messageDetails?.senderId);
    
    useEffect(()=>{
        if(messageRef.current){
            messageRef.current.scrollIntoView({behavior:'smooth'})
        }
    },[])
    
    return (
        <div>
            
            <div ref={messageRef} className={`chat ${userProfile?._id===messageDetails?.senderId?"chat-end":"chat-start"}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={userProfile?._id===messageDetails?.senderId?userProfile?.avatar:selectedUser?.avatar}
                        />
                    </div>
                </div>
                <div className="chat-header">
                    
                    <time className="text-xs opacity-50">12:46</time>
                </div>
                <div className="chat-bubble">{messageDetails?.message}</div>
                
            </div>
        </div>
    )
}

export default Message