import {useState} from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { Textarea } from './ui/textarea';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { toast,Slide } from 'react-toastify';


const MessageFrom = () => {
  const [message,setMessage] = useState<String>("")
  const [delay,setDelay] = useState<Number>(0)
  const [sendMessage,setSendMessage] = useState<String>("")
  const [isSending,setIsSending] = useState<boolean>(false)
const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

 const delayMs = Number(delay) * 1000;

  const handleSend = () => {
  if (!message) return;

  setIsSending(true);

  const id = setTimeout(() => {
    setIsSending(false);
    setSendMessage(message);
    setMessage("");
    setDelay(0)
    console.log(sendMessage)
    toast.success(`Message Send : ${message}`,{
      position: "bottom-right",
      autoClose: 2000,  
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    })  
  },delayMs);
  setTimerId(id); 
};

  

  const handleClose = () => {
    clearTimeout(timerId)
    setIsSending(false)
    setSendMessage("")
    setMessage("")
    setDelay(0)

    toast.error(`Message sending cancelled`,{
      position: "bottom-right",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: false,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
    })  
  }
  return (
    <div className='w-120 border-[2px] border-[#281655] p-5 px-8 rounded-2xl text-white' style={{background: "linear-gradient(129deg,#0d1322 0%, #070a12 100%)"}}>
      <div className='flex flex-col items-center w-full mb-8'>
        <div className='w-fit flex items-center justify-between p-5 rounded-[90px]' style={{background: "linear-gradient(129deg,rgba(100, 39, 201, 1) 0%, rgba(229, 137, 232, 1) 100%)"}}>
          <MdOutlineTimer size={50}/>
      </div>
      <h2 className='text-3xl font-bold text-[#6427c9] mt-5'>Delayed Message Sender</h2>
      <p className='text-gray-400 text-base mt-1'>Send messages with a delay and undo option</p>
      </div>
      
      <div className='mb-4'>
        <Label htmlFor="message" className='text-lg font-semibold '>Your Message</Label>
        <Textarea
          id='message'
          placeholder='Type your Message here...'
          value={String(message)}
          onChange={(e) => setMessage(e.target.value)}
          className='mt-2 border-2 border-gray-700'
        />
      </div>
      <div className='mb-4'>
        <Label htmlFor="message" className='text-lg font-semibold '>Delay Duration</Label>
        <Input type='number'
        placeholder='Enter the delay'
        className='mt-2 border-2 border-gray-700 py-5'
        disabled={isSending}
       value={Number(delay)}
       onChange={(e) => setDelay(Number(e.target.value))}/>
      </div>
      {!isSending ? (
        <Button className={`w-full py-6 text-xl mt-2 text-white font-semibold rounded  ${message.length===0 ? "cursor-not-allowed opacity-40":"cursor-pointer"}
  bg-gradient-to-r from-[#6427C9] to-[#E589E8] 
  hover:brightness-110
  transition-all duration-300`} onClick={handleSend}>
  Send Message
</Button>
      ): <button className="w-full relative flex  justify-center font-semibold text-xl items-center gap-2 bg-red-600 hover:bg-red-800 text-white px-3 py-2.5 rounded transition-all cursor-pointer" onClick={handleClose}>
          <div className="absolute left-0 top-0 h-full bg-red-900 opacity-60 transition-all"
      style={{
        width: '100%',
        animation: `progressBar ${delay}s linear forwards`
      }}
    ></div>
      <IoCloseSharp size={24} className="text-white" />
      Undo Send
    </button>}
    </div>
  )
}

export default MessageFrom
