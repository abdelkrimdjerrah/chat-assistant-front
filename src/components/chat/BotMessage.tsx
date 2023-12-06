import React from 'react'

interface Props {
     message: string 
}

const BotMessage = ({message}:Props) => {
  return (
    <div className='flex bg-zinc-200 bg-opacity-60 rounded-xl p-5 gap-2'>
      <div className='font-bold'>Sacha:</div>
      {message}
    </div>
  )
}

export default BotMessage
