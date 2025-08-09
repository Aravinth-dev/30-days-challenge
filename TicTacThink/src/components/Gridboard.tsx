import Square from "./Square"

interface Props{
    board:Array<string | null>
    isPlayerTurn:boolean
    handlePlayerMove:(index: number) => void

}

const Gridboard = ({board,handlePlayerMove,isPlayerTurn}:Props) => {
  return (
    <div className='text-white grid grid-cols-3 gap-3'>
      {board.map((value,i) => (
        <Square value={value} key={i} i = {i} handlePlayerMove={handlePlayerMove}  isPlayerTurn={isPlayerTurn}/>
      ))}
    </div>
  )
}

export default Gridboard
