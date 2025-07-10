import React from 'react'
import { FaSearch } from "react-icons/fa";
import User from './User';

const UserSidebar = () => {
  return (
    <div className='max-w-[20rem] w-full  text-white h-screen flex flex-col border-r border-r-white/10 overflow-y-auto '>

      <div>
        <h1 className='font-bold text-2xl'>Gupshup</h1>
      </div>
      <div className='p-2'>
        <label className="input input-bordered flex items-center gap-2">
          <FaSearch />
          <input type="search" class="grow" placeholder="Search" />

        </label>
      </div>
      <div className='h-full overflow-y-scroll '>
        <User />
        <User />
        <User />
        <User />
        <User />
     
 
      </div>
      <div className='h-[3rem]  flex justify-between p-2 border-t border-t-white/10'>
        <div className="avatar avatar-online">
          <div className="w-7 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <button className="btn btn-active btn-primary btn-sm">Logout</button>
      </div>
    </div>
  )
}

export default UserSidebar