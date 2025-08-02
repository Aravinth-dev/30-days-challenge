import {Input} from "@/components/ui/input"
import { useEffect,useRef } from "react"


type Props = {
    mood:string,
    setMood: (mood: string) => void
    handleGenerate:void
    generate:boolean
    isLoading:boolean
    handleKey:void
}
const MoodInput = ({mood,setMood,handleGenerate,generate,isLoading,handleKey}:Props) => {
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
   
  return (
    <>
       <div className="w-[90%] h-auto bg-[#f9f9f9] p-8 m-auto mt-12 rounded-lg shadow-xl">
                <h2 className="text-xl font-semibold text-center">How are you feeling today?</h2>
                <div className="mt-10">
                    <label className="text-lg font-semibold">Enter your mood</label>
                    <Input 
                    type="text"
                    ref={inputRef}
                    placeholder="Type your feeling here (e.g., anxious, joyful)"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    disabled={generate}
                    className="mt-2 py-5 border-1 border-gray-400"/>
                </div>
                <div className="mt-5">
                    <button aria-busy={isLoading} className={`py-2 rounded-lg w-full bg-gradient-to-r from-[#3313e5] to-[#b875e8] text-white font-bold text-xl flex gap-2 items-center justify-center cursor-pointer hover:shadow-2xl hover:scale-102 active:scale-99 transition-all duration-150 ease-in-out ${isLoading ? 'opacity-80 cursor-not-allowed' : 'opacity-100'}`} onKeyDown={handleKey} onClick={handleGenerate} disabled={mood.length == 0 ||generate}>
                        {!isLoading ? (
                            <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>
                        Generate Email Magic
                        </>) : (
                            <>
                            <span className="loading loading-spinner loading-sm"></span>
                            Generating.....
                            </>
                        )}
                    </button>
                </div>
            </div>
    </>
  )
}

export default MoodInput
