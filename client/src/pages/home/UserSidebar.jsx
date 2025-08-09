import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import User from './User';
import { useDispatch, useSelector } from 'react-redux';
import { logoutrUserThunk } from '../store/slice/user/user.thunk';
import { getOtherUserThunk } from '../store/slice/user/user.thunk';




const UserSidebar = () => {


  const dispatch = useDispatch()
  const [users, setusers] = useState([])
  const { otherusers, userProfile } = useSelector(state => state.user)
  // console.log(userProfile);
  const [Searchvalue, setSearchvalue] = useState('')
  const handleLogout = async () => {
    await dispatch(logoutrUserThunk())
  }

  useEffect(() => {
    (async () => { await dispatch(getOtherUserThunk()) })()

  }, [])
  useEffect(() => {
    if (!Searchvalue) {
      setusers(otherusers)
    }
    else {
      setusers(otherusers.filter(user => {
        return user.username.toLowerCase().includes(Searchvalue.toLowerCase()) ||
          user.fullName.toLowercase().includes(Searchvalue.toLowerCase())
      }))
    }
  }, [Searchvalue])
  return (
    <div className='max-w-[20rem] w-full  text-white h-screen flex flex-col border-r border-r-white/10 overflow-y-auto  '>

      <div>
        <h1 className='font-bold text-2xl'>Gupshup</h1>
      </div>
      <div className='p-2'>
        <label className="input input-bordered flex items-center gap-2">
          <FaSearch />
          <input type="search" className="grow" placeholder="Search" onChange={(e) => setSearchvalue(e.target.value)} />

        </label>
      </div>
      <div className='h-full overflow-y-scroll '>
        {otherusers?.map(userDetails => {

          return (
            <User key={userDetails?._id} userDetails={userDetails} />
          )

        })}



      </div>
      <div className="h-[4.5rem] flex items-center justify-between px-4 py-2 border-t border-white/10 bg-gray-800 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow">
            <img
              src={userProfile?.avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-sm font-medium">{userProfile?.username || "Guest"}</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
        <button
          className="btn btn-sm btn-outline btn-error px-3 py-1 rounded-md text-xs"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

    </div>
  )
}

export default UserSidebar