import React from 'react'

const User = () => {
    return (
        <div className='flex gap-5 p-2 m-2 items-center'>

        <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
        </div>
        <div>
            <h2  className='line-clamp-1'>Full Name</h2>
            <p className='text-sm'>Username</p>
        </div>
        </div>
    )
}

export default User