

interface Props{
    score:{X:number,O:number}
    isPlayerTurn:boolean
}

const Score = ({score,isPlayerTurn}:Props) => {
  return (
    <div className="flex space-x-5 justify-between items-baseline px-5">
            <h2 className={`text-3xl font-bold ${isPlayerTurn ? 'text-[#c084fc]' :'text-gray-400' }`}>You (X) : {score.X}</h2>
            <p className="text-xl font-bold text-white">VS</p>
            <h2 className={`text-3xl font-bold ${isPlayerTurn ? 'text-gray-400' : 'text-[#22d3ee]'}`}>AI (O): {score.O}</h2>
    </div>
  )
}

export default Score
