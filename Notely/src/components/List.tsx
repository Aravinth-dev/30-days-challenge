import { PiStar } from "react-icons/pi";
import { PiStarFill } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import nodata from "@/assets/12146015_Wavy_Gen-01_Single-10.jpg"



interface Props{
    note:{id:string,title:string,description:string,star:boolean,category:string}[],
    handleDelete:(id:string)=>void
    handleStar:(id:string,star:boolean)=>void
    handleEdit:(id:string)=>void
}

const List = ({note,handleDelete,handleStar,handleEdit}:Props) => {

    if(note.length == 0)
        return <div className="flex flex-col justify-center items-center min-h-120">
            <img src={nodata} alt="" className="w-80"/>
            No notes found. Create your first one!</div>;
  return (
    <div className='w-[90%] h-auto p-5 mx-auto my-10'>
        <div className='grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6'>
            {note.map((item) => (
        <div key={item.id} className={`group p-4 pt-5 rounded-xl h-80 ${item.category == 'ideas' ? 'bg-amber-50' : item.category == 'work' ? 'bg-blue-50' :'bg-emerald-50' } hover:shadow-2xl transition-all duration-700`}>
            <div className="flex justify-end pr-3.5">
                {item.star == true && (
                    <PiStarFill size={22} className='text-3xl text-yellow-500' />
                )}
            </div>

            <p className={`${item.category == 'ideas' ? 'text-amber-600' : item.category == 'work' ? 'text-blue-600' :'text-emerald-600' } font-Poppins mb-3 mt-6`}>{item.category}</p>
            <h1 className='text-[20px] font-bold font-Poppins'>{item.title}</h1>
            <p className='text-sm mt-2 text-gray-600'>{item.description}</p>
            <div className="mt-6 hidden group-hover:flex justify-between items-center transition-all duration-500">
                <div className="cursor-pointer" onClick={() => handleStar(item.id,!item.star)}>
                    {item.star === false ? (
                       <div>
                        <PiStar size={20}/>
                       </div>
                    ):(
                        <div className="text-amber-300">
                            <PiStarFill size={20} />
                        </div>
                    )}
                </div>
                <div className="flex gap-3">
                    <div className="text-gray-700 p-3 rounded-xl cursor-pointer hover:text-blue-500 hover:bg-blue-50" onClick={() => handleEdit(item.id)}>
                        <FaRegEdit size={20} />
                    </div>
                    <div className="text-gray-700 p-3 rounded-xl cursor-pointer hover:text-red-500 hover:bg-red-50" onClick={() => handleDelete(item.id)}>
                        <RiDeleteBin6Line size={20} />
                    </div>
                </div>
            </div>
        </div>
       ))}
        </div>
    </div>
  )
}

export default List
