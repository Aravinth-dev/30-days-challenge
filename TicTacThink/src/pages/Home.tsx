import AiSettings from "@/components/AiSettings"
import Gridboard from "@/components/Gridboard"
import Score from "@/components/Score"
import { useEffect, useState } from "react"
import {getAiMove} from "@/lib/aiOpenroutes"
import { ResultModal } from "@/components/ResultModal"

import {CheckWinner} from "@/lib/Winner"


const Home = () => {
    //state for the 9 cell 
    const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null))
    
    //State for the player turn
    const [isPlayerTurn,setIsplayerTurn] = useState<boolean>(true)

    //state for the who won {X,O,Draw}
    const [winner,setWinner] = useState<any>(null)

    //state for the Score of{X:0,O:0}
    const [score,setScore] = useState<{X:number,O:number}>({X:0,O:0})

    //state for AI model Selection
    const [aiModel, setAiModel] = useState<string>('deepseek/deepseek-r1:free')

    //state for the resetbutton loading
    const [isResetLoading, setIsResetLoading] = useState(false)

    useEffect(() => {
  // Check if someone won
  const result = CheckWinner(board);

  if(result?.winner){
    setWinner(result.winner);
    setScore((prev) => ({
      ...prev,
      [result.winner]: prev[result.winner] + 1
    }))
  }
}, [board]);

    useEffect(()=>{
      //isPlayerTurn is false

      if(!isPlayerTurn && !winner){
        const aiTurn  = async() => {
          const move = await getAiMove(board,aiModel)
           const newArray = [...board]
           newArray[move]='O'
           setBoard(newArray)
          console.log(move)
          setIsplayerTurn(true)
        }
        aiTurn()
      }

          
    },[isPlayerTurn,board,winner,aiModel])

    //Add the player Move on the board Array using the index

    const handlePlayerMove = (i:number) =>{

      if(!isPlayerTurn || board[i] || winner) return
        const newArray = [...board]
        newArray[i] = 'X';
        setBoard(newArray)
        setIsplayerTurn(false)
    }

    //Reset the Player Moves
    const resetGame = () =>{
      setIsResetLoading(true)
      setTimeout(() => {
      setBoard(Array(9).fill(null))
      setIsplayerTurn(true)
      setWinner(null)
      setScore({X:0,O:0})
      setAiModel('deepseek/deepseek-r1:free')
      setIsResetLoading(false)
      }, 2000);
    }

  return (
    <div className="w-full min-h-screen  bg-[#111827] flex items-center justify-center pb-20">
      <div className="w-[80%] min-h-120 bg-[#0c111f] border border-[#1c2c44] rounded-xl max-lg:mt-20 max-lg:w-[90%] ">
        <h1 className="text-4xl text-[#22d3ee] font-bold mb-3 border-b-2 p-8 pb-4 border-[#1c2c44]">Tic Tac Think</h1>

        <div className="flex p-8 w-full max-lg:flex-col h-full gap-6">
        <div className="w-1/2 h-full max-lg:w-full">
        <Score score={score} isPlayerTurn={isPlayerTurn}/>
        {!isPlayerTurn && (
          <p className="text-2xl text-[#22d3ee] text-center mt-4">AI is thinking...</p>
        )}
        <div className="flex flex-col items-center justify-center mt-10">

          <Gridboard board={board}
          isPlayerTurn={isPlayerTurn}
          handlePlayerMove = {handlePlayerMove}/>

          <ResultModal
  winner={winner}
  onClose={() => {
    setBoard(Array(9).fill(null));
    setIsplayerTurn(true);
    setWinner(null);
  }}
/>
        </div>
        </div>
        <div className="w-1/2 h-full max-lg:w-full">

        <AiSettings aiModel={aiModel} 
        setAiModel={setAiModel}
        resetGame={resetGame}
        board={board}
        isResetLoading={isResetLoading}
        />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
