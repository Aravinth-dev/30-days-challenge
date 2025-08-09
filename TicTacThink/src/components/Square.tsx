

interface Props{
    value:string | null
    i:number
    isPlayerTurn:boolean
    handlePlayerMove:(index: number)=>void
}
const Square = ({value,i,handlePlayerMove,isPlayerTurn}:Props) => {
    
  return (
      <div className={`w-24 h-24 flex items-center justify-center text-5xl ${value == null ? 'hover:border-blue-600 hover:scale-110 cursor-pointer':'cursor-not-allowed'} ${value=='X' ?'text-[#c084fc]' : 'text-[#22d3ee]'} border border-gray-500  rounded-2xl ${isPlayerTurn ?  'bg-linear-to-tr from-[#374151c1] to-[#11182751]':'cursor-not-allowed bg-linear-to-tr  from-[#2323235b] to-[#9f9f9f21]  transition-all duration-500  opacity-60 animate-text'}`} onClick={() => handlePlayerMove(i)}>
            {value && <span className="text-20">{value}</span>}
        </div>
  )
}

export default Square
