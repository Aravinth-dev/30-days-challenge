import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

interface Props {
  activity:string,
  setActivity:(activity:string)=>void;
  hours:string | number,
  setHours:(hours:string | number)=> void,
  color:string,
  setColor:(color:string,) => void,
  handleAdd: (activity: string, hours:number, color: string) => void;
}
const NewActivity = ({activity,setActivity,hours,setHours,color,setColor,handleAdd}:Props) => {
    

    const handleSubmit = () =>{
      if(!activity.trim() || !hours) return
      handleAdd(activity.trim(), Number(hours), color)
      setActivity('')
      setHours('')
      const newColor = ['purple','violet','pink','yellow','green','cyan','orange','rose','blue','emerald']
      setColor(newColor[newColor.indexOf(color)+1] || 'purple')
    } 
  return (
    <div className='bg-indigo-100/10 backdrop-blur-lg shadow-xl rounded-lg p-8 max-lg:p-4 max-lg:rounded-md'>
            <div className='flex gap-4'>
                <div className='p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white'>
                    <FaPlus size={20}/>
                </div>
                <h2 className='text-3xl font-crete font-bold tracking-wider'>New Activity</h2>
            </div>
            <div className='mt-4'>
                <label htmlFor="Activity" className='font-crete text-xl tracking-wide'>Activity Name</label>
                <Input 
                id="Activity"
                type="text"
                placeholder="eg: Deep Work, Exercise, Reading"
                className="font-dosis bg-white py-6 text-xl border-none mt-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}></Input>
            </div>
            <div className='mt-4'>
                <label htmlFor="duration" className='font-crete text-xl tracking-wide'>Duration (hours)</label>
                <Input 
                id="duration"
                type="number"
                placeholder="2.5"
                className="font-dosis bg-white py-6 text-3xl border-none mt-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.2)]"
                value={hours || ''}
                onChange={(e) => Number(setHours(e.target.value))}
                ></Input>
            </div>
            <div className='mt-4'>
                <label className='font-crete text-xl tracking-wide'>Color Theme</label>
                <div className='flex gap-2 mt-4 items-center'>
                    <div className={`w-18 h-18 bg-${color}-500 rounded-xl border-4 border-white shadow-lg`}></div>
                    <div className="flex flex-col space-y-2">
                        <div className="flex gap-3">
                            <div className={`w-12 h-12 bg-purple-500 rounded-lg border-4 border-white cursor-pointer ${color==='purple' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('purple')}></div>
                            <div className={`w-12 h-12 bg-violet-500 rounded-lg border-4 border-white cursor-pointer ${color==='violet' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('violet')}></div>
                            <div className={`w-12 h-12 bg-pink-500 rounded-lg border-4 border-white cursor-pointer ${color==='pink' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('pink')}></div>
                            <div className={`w-12 h-12 bg-yellow-500 rounded-lg border-4 border-white cursor-pointer ${color==='yellow' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('yellow')}></div>
                            <div className={`w-12 h-12 bg-green-500 rounded-lg border-4 border-white cursor-pointer ${color==='green' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('green')}></div>
                        </div>
                        <div className="flex gap-3">
                            <div className={`w-12 h-12 bg-cyan-500 rounded-lg border-4 border-white cursor-pointer ${color==='cyan' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('cyan')}></div>
                            <div className={`w-12 h-12 bg-orange-500 rounded-lg border-4 border-white cursor-pointer ${color==='orange' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('orange')}></div>
                            <div className={`w-12 h-12 bg-rose-500 rounded-lg border-4 border-white cursor-pointer ${color==='rose' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('rose')}></div>
                            <div className={`w-12 h-12 bg-blue-500 rounded-lg border-4 border-white cursor-pointer ${color==='blue' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('blue')}></div>
                            <div className={`w-12 h-12 bg-emerald-500 rounded-lg border-4 border-white cursor-pointer ${color==='emerald' ?  'shadow-xl' : 'shadow-none'}`} onClick={() => setColor('emerald')}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full">
                <Button className={`w-full py-6 text-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white  ${
    activity.length === 0 || String(hours).length === 0
      ? 'cursor-not-allowed'
      : 'cursor-pointer'
  }`} disabled={activity.length ===0 || String(hours).length == 0} onClick={handleSubmit}>Add Activity</Button>
            </div>
            </div>
  )
}

export default NewActivity
