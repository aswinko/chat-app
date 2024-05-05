import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChartSelected from './NoChartSelected'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext'

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation()
  const {onlineUsers} = useSocketContext()
  const  isOnline = onlineUsers.includes(selectedConversation?._id)

  useEffect(() => {

    //cleanup function
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChartSelected />
      ) : (
        <>
          {/* {Header"} */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{' '}
            <span className={` font-bold ${isOnline ? "text-green-600": "text-gray-950"}`}>{selectedConversation.fullName}</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer
