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
    <div className="w-full h-screen flex gap-10 pt-20 pb-5">
      <History />
      <Chat />
    </div>
  )
}

export default Home
