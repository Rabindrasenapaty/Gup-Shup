import React, { useEffect } from 'react'
import UserSidebar from './UserSidebar'
import MessageContainer from './MessageContainer'
import io from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { initializeSocket, setOnlineUsers } from '../store/slice/socket/socket.slice'
import { setNewMessage } from '../store/slice/message/message.slice'

const Home = () => {
  const dispatch = useDispatch()

  const { isAuthenticated, userProfile } = useSelector(state => state.user)
  const {socket} =useSelector(state=>state.socketReducer)
  // console.log(isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) return;
    // console.log("helo");

    dispatch(initializeSocket(userProfile?._id))

  }, [isAuthenticated])

  useEffect(()=>{
    if(!socket) return 
          socket.on("onlineUsers",(onlineUsers)=>{
                console.log(onlineUsers)
                dispatch(setOnlineUsers(onlineUsers))
            }),
            socket.on("newMessage",(newMessage)=>{
                
                // dispatch(setOnlineUsers(onlineUsers))
                dispatch(setNewMessage(newMessage))
            })
          
            return ()=>{
              socket.close()
            }
        
  },[socket])


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