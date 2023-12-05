import History from "../components/chat/History";
import Chat from "../components/chat/Chat";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../redux/userSlice";



const Home = () => {

  const [currentSession, setCurrentSession] = useState('6560cb483449bf1d9129a829')
  const [data, setData] = useState<Entities.ISession>()
  const userData = useSelector(selectUserData);
  const userId = userData?._id

  
  return (
    <div className="w-full h-[100dvh] flex gap-10 pt-20 md:pb-5 overflow-y-hidden">
      <History />
      <Chat />
    </div>
  )
}

export default Home
