import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Button } from "./ui/button";
import { GrPowerReset } from "react-icons/gr";

interface Props{
    aiModel:string
    board:Array<string | null>
    setAiModel:(aiModel:string)=>void
    resetGame:()=>void
    isResetLoading:boolean
}

const AiSettings = ({aiModel,setAiModel,resetGame,isResetLoading,board}:Props) => {
  return (
    <div className="w-full p-5 bg-[#1f2937] h-auto rounded-2xl">
          <h2 className="text-[#22d3ee] font-bold text-2xl">AI Settings</h2>
          <div className="mt-3">
            <label className="text-white font-medium text-base">AI Provider</label>
            <Select value={aiModel} onValueChange={(value) => setAiModel(value)}>
  <SelectTrigger className="w-full text-white mt-4 cursor-pointer">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent className="bg-gray-800 text-white">
    <SelectItem value="deepseek/deepseek-r1:free">DeepSeek</SelectItem>
    <SelectItem value="moonshotai/kimi-dev-72b:free">KIMI</SelectItem>
    <SelectItem value="z-ai/glm-4.5-air:free">Z.AI</SelectItem>
  </SelectContent>
</Select>
          </div >

          <div className="mt-2">
            <Button className={`w-full py-5 bg-blue-900 mt-6 ${board.every(item => item=== null) ? 'cursor-not-allowed opacity-80':'cursor-pointer hover:bg-blue-600'}  font-semibold text-lg`} onClick={resetGame} disabled={board.every(item => item=== null)}>
                <GrPowerReset size={26}  className={`${isResetLoading ? 'animate-spin' : ''}`} />
                Reset
            </Button>
          </div>
    </div>
  )
}

export default AiSettings
