import ActivityChart from "@/components/ActivityChart";
import ActivityList from "@/components/ActivityList";
import DailyProgress from "@/components/DailyProgress";
import NewActivity from "@/components/NewActivity";
import { useState } from "react";

import { FaClock } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";


const Home = () => {
    const [data, setData] = useState<{ activity: string; hours: number; color: string }[]>(
  () => {
    const storedData = localStorage.getItem('data');
    return storedData ? JSON.parse(storedData) : [];
  }
);
    const [activity,setActivity] = useState<string>("")
    const [hours,setHours] =useState<string | number>('')
    const [color,setColor] = useState<string>("purple")
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);


const handleAdd = (activity: string, hours: number, color: string) => {
  const updatedActivity = { activity, hours, color };

  let updatedData;
  if (selectedIndex !== null) {
    updatedData = [...data];
    updatedData[selectedIndex] = updatedActivity;
    setSelectedIndex(null);
  } else {
    updatedData = [...data, updatedActivity];
  }

  setData(updatedData);
  localStorage.setItem('data', JSON.stringify(updatedData));
};

    const handleTotalHours = () => {
        const total = data.reduce((acc, item) => acc + item.hours, 0)
        return total
    }

    const handleEfficiency = () => {
        const total = handleTotalHours()
        const efficiency = (total / 24) * 100
        return efficiency.toFixed(1)
    }
  return (
    <div className='w-full  max-w-[1200px] mx-auto h-auto py-8 px-15 max-lg:px-8'>
        <div className='flex space-x-4 items-center max-lg:justify-center'>
            <div className='p-4 w-fit text-white rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-xl'>
                <FaClock size={32}/>
            </div>
            <div className=''>
                <h2 className='text-5xl font-crete font-semibold tracking-wider'>TimeFlow</h2>
                <p className='text-xl font-dosis text-gray-500'>Track your daily activites</p>
            </div>
        </div>

        {/*Tracking Part*/}
        <div className='grid grid-cols-3 max-lg:grid-cols-1 gap-6 mt-10'>
            <div className='h-28 relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70  backdrop-blur-xl shadow-xl rounded-xl'>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-600/10" />
            <div className='flex items-center h-full p-8 space-x-4'>
                <div className='p-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white'>
                    <FaPlus size={20}/>
                </div>
                <div>
                    <p className='text-lg text-gray-400 font-dosis font-semibold'>Total Activities</p>
                    <h3 className='text-3xl font-sans font-black'>{data.length}</h3>
                </div>
            </div>
            </div>
            <div className='h-28 relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70  backdrop-blur-xl shadow-xl rounded-xl'>
                 <div className='absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-600/10'></div>
                 <div className='flex items-center h-full p-8 space-x-4'>
                <div className='p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white'>
                    <FaArrowTrendUp size={20}/>
                </div>
                <div>
                    <p className='text-lg text-gray-400 font-dosis font-semibold'>Hours Tracked</p>
                    <h3 className='text-3xl font-sans font-black'>{handleTotalHours()}h</h3>
                </div>
            </div>
            </div>
            <div className='h-28 relative overflow-hidden border-0 bg-gradient-to-br from-white/90 to-white/70  backdrop-blur-xl shadow-xl rounded-xl'>
              <div className='absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-600/10'></div>
              <div className='flex items-center h-full p-8 space-x-4'>
                <div className='p-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 text-white'>
                    <SlEnergy size={20}/>
                </div>
                <div>
                    <p className='text-lg text-gray-400 font-dosis font-semibold'>Efficiency</p>
                    <h3 className='text-3xl font-sans font-black'>{handleEfficiency()}%</h3>
                </div>
            </div>
            </div>
        </div>


        {/*Main Section*/}
        <div className="flex flex-col gap-6 mt-14">
            <NewActivity 
            activity={activity}
            setActivity={setActivity}
            hours = {Number(hours)}
            setHours={setHours}
            color = {color}
            setColor={setColor}
            handleAdd = {handleAdd}
            />
            <DailyProgress data ={data}/>
        </div>
        <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-6 mt-14'>
            
            <ActivityChart data ={data}/>
            <ActivityList 
            data ={data} 
            setData = {setData}
            setActivity={setActivity}
            setHours={setHours}
            setColor={setColor} 
            setSelectedIndex = {setSelectedIndex}/>
        </div>
    </div>
  )
}

export default Home
