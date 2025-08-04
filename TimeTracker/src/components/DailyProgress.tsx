import { Progress } from "@/components/ui/progress"

interface Props{
    data :{hours: number}[];
}
const DailyProgress = ({data}:Props) => {
    const totalHours = () => {
        return data.reduce((acc, hour) => acc + hour.hours, 0);
    }
    const totalHoursProgress = () => {
        return totalHours() / 24 * 100;
    }
  return (
    <div className='h-fit bg-emerald-200/10 backdrop-blur-lg shadow-xl rounded-lg p-8 max-lg:p-4 max-lg:rounded-md'>
        <div className='flex justify-between items-center'>
            <div>
                <h2 className='text-2xl font-crete font-bold tracking-wider'>Daily Progress</h2>
                <p className="text-gray-500 font-dosis mt-1">Track your 24-hour goal</p>
            </div>
            <div className={`p-1 px-3 w-fit  rounded-2xl ${totalHours() > 24 ? 'bg-red-500' : 'bg-gradient-to-r from-green-500 to-emerald-600'} text-white`}>
            <p className='font-bold tracking-widest'>{totalHours()} / 24h</p>
            </div>
        </div>
    <div>
                <div>
                   <Progress value={totalHoursProgress()> 100 ? 100 : totalHoursProgress()} className="w-full h-3 mt-6 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-600"/>
                </div>
                <div className="flex justify-between mt-2 text-gray-500 text-base">
                    <p>0h</p>
                    <p>12h</p>
                    <p>24h</p>
                </div>
                {totalHours() > 24 && (
                <div className="mt-4 p-2 bg-red-50 border border-red-400 rounded-sm text-red-600">
                    You've exceeded your daily limit!
                </div>
                )
}
            </div>
    </div>
  )
}

export default DailyProgress
