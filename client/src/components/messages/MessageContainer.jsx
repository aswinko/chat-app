import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChartSelected from './NoChartSelected'

const MessageContainer = () => {
  const noChartSelected = false
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChartSelected ? (
        <NoChartSelected />
      ) : (
        <>
          {/* {Header"} */}
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{' '}
            <span className="text-gray-900 font-bold">John Doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

export default MessageContainer
