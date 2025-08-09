import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedUser } from '../store/slice/user/user.slice'

const User = ({ userDetails }) => {

    const dispatch = useDispatch()
    const { selectedUser } = useSelector(state => state.user)
    const { onlineUsers } = useSelector(state => state.socketReducer)
    console.log(onlineUsers?.includes(userDetails?._id));
    const isUserOnline=onlineUsers?.includes(userDetails?._id)


    const handleUserClick = () => {
        dispatch(setSelectedUser(userDetails))
    }


    return (
        <div onClick={handleUserClick}
            className={`flex gap-5 p-2 px-4 items-center cursor-pointer bg-white/5 hover:bg-white/10 transition-all ${userDetails?._id === selectedUser?._id ? "bg-white/10" : ""
                }`}
        >

            <div className={`avatar ${isUserOnline && 'avatar-online'}`}>
                <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src={userDetails?.avatar} />
                </div>
            </div>
            <div>
                <h2 className='line-clamp-1'>{userDetails?.fullName}</h2>
                <p className='text-sm'>{userDetails?.username}</p>
            </div>
        </div>
    )
}

export default User