import { FaBookOpen } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import Overlay from "./Overlay";

interface Props{
    overlay:boolean
    setOverlay:(overlay:boolean) => void
}

const Header = ({overlay,setOverlay}:Props) => {
    
  return (
    <>
    <div className='w-full h-[5.5rem] border-b-2 shadow-lg shadow-gray-100 px-8 flex justify-between items-center z-10 bg-white'>
  <div className="flex items-center gap-3">
    <div className="w-fit p-3 bg-black text-white rounded-xl">
      <FaBookOpen size={30} />
    </div>
    <div>
      <h2 className="text-3xl font-Poppins font-bold tracking-wider">Notoon</h2>
      <p className="font-Poppins text-gray-400">Not just notes. Your creative space.</p>
    </div>
  </div>
  <div>
    <Button className="py-6 text-xl gap-4 flex items-center cursor-pointer hover:scale-102 hover:shadow-xl action:scale-98"  onClick={() => setOverlay(true)}>
      <FaPlus size={26} /> New Note
    </Button>
  </div>
</div>

{/* Overlay */}
{
    overlay && <Overlay setOverlay={setOverlay} />
}



    </>
    
  )
}

export default Header
