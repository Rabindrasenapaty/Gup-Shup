import React from 'react'
import User from './User';
import Message from './Message';
import { IoSendSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getmessagethunk } from '../store/slice/message/message.thunk';
import SendMessage from './SendMessage';

const MessageContainer = () => {
  const { selectedUser } = useSelector(state => state.user)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!selectedUser) return;
    dispatch(getmessagethunk({ receiverId: selectedUser?._id }))
  }, [selectedUser])

  const {messages}=useSelector(state=>state.messagereducer)
  console.log(messages);
  



  return (
    <>
      {!selectedUser ? (<div className="flex items-center justify-center h-screen text-white text-xl font-semibold bg-gray-900">
        <p className="px-4 py-2 bg-gray-800 rounded-md shadow-md">
          Please select a user to start chatting 💬
        </p>
      </div>) : (
        <div className=' w-full h-screen flex flex-col'>
          <div className=' px-3 border-b border-b-white/10  '>
            <User userDetails={selectedUser} />
          </div>
          <div className='p-3 h-full overflow-y-auto'>
        {messages?.map(messageDetails=>{
          return (
            <Message messageDetails={messageDetails} key={messageDetails?._id}/>
          )
        })}
          
          </div>
          <SendMessage/>

        </div>
      )}
    </>
  )
}

export default MessageContainer