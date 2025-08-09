import React, { useState } from 'react'
import { IoSendSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { sendmessagethunk } from '../store/slice/message/message.thunk';

const SendMessage = () => {

    const dispatch = useDispatch()
    const [message, setMessage] = useState('')
    const { selectedUser } = useSelector((state) => state.user)

    const handleSendMessage = () => {
        console.log(message);
        dispatch(sendmessagethunk({
            receiverId: selectedUser._id,
            message
        }))
        setMessage('')

    }
    return (
        <div>
            <div className='w-full p-2 border-t border-t-white/10 flex gap-2'>


                <input type="text" className="input w-full input-primary " placeholder="Type here ..." onChange={(e) => setMessage(e.target.value)} />
                <button className="btn btn-square btn-outline btn-primary" onClick={handleSendMessage}>
                    <IoSendSharp />

                </button>


            </div>
        </div>
    )
}

export default SendMessage