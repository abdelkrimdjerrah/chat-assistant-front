import React from 'react'
import { setSessionId } from '../../redux/sessionSlice'
import { useDispatch } from 'react-redux'

interface Props {
    sessionId: string,
    title: string,
}

const HistoryItem = ({sessionId, title}:Props) => {

  const dispatch = useDispatch()

  return (
    <div onClick={()=>dispatch(setSessionId(sessionId))}>
      {title}
    </div>
  )
}

export default HistoryItem
