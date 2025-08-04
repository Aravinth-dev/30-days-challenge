import {Pie} from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartimg from "@/assets/pie-chart_372349.png"

ChartJS.register(ArcElement,Tooltip,Legend);

interface Props {
    data :{activity: string, hours: number, color: string}[];
}
const ActivityChart = ({data}:Props) => {
    const chartData = {
        labels: data.map((d) => d.activity),
        datasets: [
            {
                label: 'Hours',
                data: data.map((d) => d.hours),
                backgroundColor: data.map((d) => d.color),
                borderColor: 'white',
                borderWidth: 2
                }
                ]
                }
  return (
    <div className='bg-green-200/10 min-h-100 backdrop-blur-lg shadow-lg rounded-lg p-8 max-lg:p-4 max-lg:rounded-md'>
            <h2 className='text-3xl font-crete font-bold tracking-wider'>Activity Distribution</h2>
            <p className="text-gray-500 font-dosis mt-1">Visual breakdown of your time</p>
            <div className="w-[80%] mt-8 mx-auto flex items-center justify-center">
                {data.length == 0 ? (
                    <>
                    <div className="flex flex-col items-center">
                        <img src={chartimg} alt="" className="w-48 h-48"/>
                        <p className="text-2xl font-semibold font-dosis">No activities yet </p>
                        <p className="text-center text-gray-400">Start tracking your time by adding your first activity above!</p>
                    </div>
                    </>
                ):(
                    <Pie data={chartData}/>
                )}
            </div>
    </div>
  )
}

export default ActivityChart
