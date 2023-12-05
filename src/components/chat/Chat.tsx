import { useEffect, useState } from "react"
import Textarea from "../shared/Textarea"
import Input from "../shared/Input"
import { PaperPlaneRight } from "phosphor-react"
import { axiosInstancePython, axiosInstanceSpring } from "../../api/axios"
import UserMessage from "./UserMessage"
import BotMessage from "./BotMessage"
import { useSelector } from "react-redux"
import { selectUserData } from "../../redux/userSlice"
import { selectSessionId } from "../../redux/sessionSlice"
import { setSessionId, clearSessionId } from "../../redux/sessionSlice"
import { useDispatch } from "react-redux"
import useAxiosPrivateSpring from "../../hooks/useAxiosPrivateSpring"
import Mood from "./Mood"


const Chat = () => {

    const axiosPrivateSpring = useAxiosPrivateSpring()
    const [input, setInput] = useState('')
    const [mood, setMood] = useState('')
    const [conversation, setConversation] = useState<Entities.IMessage[]>([])
    const userData = useSelector(selectUserData)
    const currentSession = useSelector(selectSessionId)
    const dispatch = useDispatch()
    
    

    const createSession = async () => {
        try {
            // const { data } = await axiosPrivateSpring.post(`/api/sessions`, {userId: userData?._id})
            const { data } = await axiosInstanceSpring.post(`/api/sessions`, {userId: userData?._id})
            dispatch(setSessionId(data))
        } catch (err) {
            console.log(err)
        }
    }

    const sentimentAnalyser = async (text:string) => {
        try {
            const { data } = await axiosInstancePython.post(`/`, {text})

            console.log(data)
            console.log(data.positive_percentage )
            if (data.positive_percentage > 60) {
                setMood('great');
            } else if (data.positive_percentage < 60) {
                setMood('bad');
            } else {
                setMood('okay');
            }
        
        } catch (err) {
            console.log(err)
        }
    }

    const fetchConversation = async () => {
        try {
            console.log(currentSession)
            // const { data } = await axiosPrivateSpring.get(`/api/sessions/${currentSession}`)
            const { data } = await axiosInstanceSpring.get(`/api/sessions/${currentSession}`)
            if(data && data.conversation){
                setConversation(data.conversation)
            }
        } catch (err) {
            console.log(err)
        }
    }

    const deleteSession = async () => {
        try {
            console.log(currentSession)
            // const { data } = await axiosPrivateSpring.delete(`/api/sessions/${currentSession}`)
            const { data } = await axiosInstanceSpring.delete(`/api/sessions/${currentSession}`)
            console.log("session : " + currentSession + " has been deleted ")
            if(data){
                clearSessionId()
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleSendPrompt = async () => {
        try {

            // if(!story){
            //     setStory(input)
            // }

            sentimentAnalyser(input)
            
            setConversation((prev:{user:boolean,text:string}[]) =>   
                [
                    ...prev,
                    {
                        user: true,
                        text: input
                    }
                ]
            )
            setInput('')

            console.log("sessionId")
            console.log(currentSession)
            console.log("sessionId")

            
            // const { data } = await axiosPrivateSpring.post(`/api/sessions/chat`, {
            const { data } = await axiosInstanceSpring.post(`/api/sessions/chat`, {
                input, sessionId: currentSession
            })


            setConversation((prev:{user:boolean,text:string}[]) =>   
                [
                    ...prev,
                    {
                        user: false,
                        text: data
                    }
                ]
            )



        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        // if (currentSession) {
        //     fetchConversation()
            
        // }else{
            createSession()
        // }

        // return(
        //     () => {
        //         if(!conversation.length){
        //             deleteSession()
        //         }
        //     }
        // )

      
    }
    , [])






  return (
    <div className='w-3/4 bg-zinc-50 rounded-3xl py-6 px-4 flex flex-col justify-between'>
        
        {
            !conversation?.length ? (
                <div className='flex flex-col gap-2'>
                <div className='text-[130px] tracking-tighter font-bold leading-none'>Hello!</div>
                <div className='text-[50px] tracking-tight leading-none'>INES is here to help you.</div>
            </div>
            ) : (
                <>
                    <div className="font-semibold pb-4">Chat</div>
                    <Mood mood={mood} />
                    <div className="overflow-y-scroll flex flex-col h-screen">
                        {
                            conversation?.map((message: {user:boolean,text:string}, index:number) => (
                                <div key={index}>
                                    {
                                        message.user ? (
                                            <UserMessage username={"Abdelkrim"} message={message.text} />
                                        ) : (
                                            <BotMessage message={message.text} />
                                        )
                                    }
                                </div>
                            ))
                            
                        }
                         
                    </div>
                
                </>

            )
        }
      
        <div className="relative min-w-fit mt-5">
            <Input
              text="Enter a prompt in here"
              type="text"
              className="border border-zinc-400 bg-zinc-50 pr-12"
              widthFull
              onChange={(v) => setInput(v)}
              value={input}
            />
            <div className='absolute top-[11px] right-3 text-zinc-400 cursor-pointer' onClick={handleSendPrompt}>
                <PaperPlaneRight size={30} weight="thin" />
            </div>
        </div>
    </div>
  )
}

export default Chat
