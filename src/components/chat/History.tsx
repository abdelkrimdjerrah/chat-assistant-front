import React, { useEffect, useState } from 'react'
import { axiosInstanceSpring } from '../../api/axios'
import { useSelector } from 'react-redux'
import { selectUserData } from '../../redux/userSlice'


const History = () => {

  const [history, setHistory] = useState<Entities.ISession[]>()
  const userData = useSelector(selectUserData)
  const userId = userData?._id


  const fetchHistory = async () => {
    try {
      const { data } = await axiosInstanceSpring.get(`/api/sessions/users/${userId}`)
        setHistory(data)
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(()=>{
    fetchHistory()
  },[])

  return (
    <div className='w-1/4 bg-zinc-50 rounded-3xl py-6 px-4'>
        <div className='flex flex-col gap-3'>
            <div className='font-semibold'>History</div>
            <div className='flex flex-col gap-2'>
                <div className='cursor-pointer'>This is a test</div>
                <div className='cursor-pointer'>This is a test</div>
                <div className='cursor-pointer'>This is a test</div>
                <div className='cursor-pointer'>This is a test</div>
            </div>
        </div>
      
    </div>
  )
}

export default History
