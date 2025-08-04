import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import datalist from "@/assets/list_534658.png"

interface Props {
  data: { activity: string; hours: number; color: string }[],
  setData: (data:{activity: string; hours: number; color: string}[])=>void,
  setActivity:(activity:string)=>void,
  setHours:(hours:string | number)=> void,
  setColor:(color:string,) => void,
  setSelectedIndex:(selectedIndex:number | null) => void
}

const ActivityList = ({setActivity,setHours,setColor,setSelectedIndex, data,setData }: Props) => {

const handleDelete = (index: number) => {
  const updatedData = data.filter((_, i) => i !== index);
  setData(updatedData);
  localStorage.setItem('data', JSON.stringify(updatedData));
};

const  handleEdit = (index:number) => {
    const activity = data[index].activity;
    const hours = data[index].hours;
    const color = data[index].color;
    setActivity(String(activity));
    setHours((hours));
    setColor(String(color));
    setSelectedIndex(index);
}
  return (
    <div className='bg-[#f6f7f8]/10 backdrop-blur-lg shadow-xl rounded-lg p-8 max-lg:p-4 max-lg:rounded-md'>
      <div>
        <h2 className='text-2xl font-crete font-bold tracking-wider'>Activity List</h2>
        <p className="text-gray-500 font-dosis mt-1">Manage your tracked activities</p>
      </div>

      <div className="mt-4 space-y-3">
        {data.length == 0 ? (
          <>
          <div className="flex flex-col  gap-2 items-center justify-center h-full min-h-80">
            <img src={datalist} alt="" className="w-38"/>
            <p className="text-2xl font-semibold">Nothing here yet...</p>
          </div>
          </>
        ) : (
           data.map((item, index) => (
          <div
            key={index}
            className="group flex items-center justify-between p-3 rounded-md bg-white border backdrop-blur-sm cursor-pointer hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3">
                <div>
                    <span
                className={`w-12 h-12 text-center flex items-center justify-center bg-${item.color}-500 rounded-lg border-4 border-white shadow-xl text-white text-xl font-semibold`}
              >{index+1}</span>
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-dosis tracking-widest">{item.activity}</h3>
                    <p className="text-gray-500 text-sm flex flex-col gap-4">{item.hours} hours &bull; {(((item.hours)/24)*100).toFixed()}%</p>
                </div>
            </div>
           <div className="hidden group-hover:flex transition-all duration-300">
            <div className="text-blue-600 p-2 rounded hover:bg-blue-100 transition-all duration-300" onClick={() => handleEdit(index)}>
                <MdModeEdit size={20}/>
            </div>
            <div className="text-red-600 p-2 rounded hover:bg-red-100 transition-all duration-300" onClick={() => handleDelete(index)}>
                <MdDelete size={20}/>
            </div>
           </div>
          </div>
        ))
        )}
      </div>
    </div>
  );
};

export default ActivityList;
