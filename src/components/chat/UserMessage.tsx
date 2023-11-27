import React from 'react'

interface Props {
     username: string
     message: string 
}

const UserMessage = ({username, message}:Props) => {
  return (
    <div className='p-5 flex gap-2'>
      <div className='font-bold'>You:</div>
      {message}
    </div>
  )
}

export default UserMessage
