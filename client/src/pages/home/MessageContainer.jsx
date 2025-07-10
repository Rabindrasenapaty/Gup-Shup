import React from 'react'
import User from './User';
import Message from './Message';
import { IoSendSharp } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className=' w-full h-screen flex flex-col'>
      <div className=' px-3 border-b border-b-white/10  '>
        <User />
      </div>
      <div className='p-3 h-full overflow-y-auto'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />

      </div>
      <div className='w-full p-2 border-t border-t-white/10 flex gap-2'>
        

          <input type="text" className="input w-full input-primary " placeholder="Type here ..." />
          <button className="btn btn-square btn-outline btn-primary">
            <IoSendSharp />
            
          </button>

       
      </div>

    </div>
  )
}

export default MessageContainer