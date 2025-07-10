import React from 'react'
import UserSidebar from './UserSidebar'
import MessageContainer from './MessageContainer'

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <UserSidebar />

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto">
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home