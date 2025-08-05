import { FaBookOpen } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa6";
import { AiOutlineBulb } from "react-icons/ai";
import { GoPerson } from "react-icons/go";

interface Props {
  filter: string,
  setFilter: (filter: string) => void,

}

const Filter = ({ filter, setFilter }: Props) => {
  return (
    <div className="flex space-x-4 w-126 p-2 border-2 mx-auto rounded-xl shadow-lg shadow-gray-50 max-md:flex-wrap max-md:w-[80%] max-md:gap-4 max-md:justify-center max-md:items-center">
      <button
        className={`text-base flex gap-3 py-2 px-5 bg-black rounded-xl items-center transition-all duration-300 cursor-pointer hover:shadow-2xl ${
          filter === 'all' ? 'shadow-xl shadow-gray-100 scale-102 bg-black text-white' : 'shadow-none bg-gray-100 text-black'
        }`}
        onClick={() => setFilter('all')}
      >
        <FaBookOpen size={18} />
        All
      </button>

      <button
        className={`text-base flex gap-3 py-2 px-5 text-blue-600 items-center rounded-xl transition-all duration-300 cursor-pointer hover:shadow-2xl ${
          filter === 'work' ? 'bg-blue-600 text-white shadow-xl shadow-gray-100 scale-102' : 'bg-blue-50 shadow-none'
        }`}
        onClick={() => setFilter('work')}
      >
        <FaSuitcase size={18} />
        Work
      </button>

      <button
        className={`text-base flex gap-3 py-2 px-5 text-amber-600 items-center rounded-xl transition-all duration-300 cursor-pointer hover:shadow-2xl ${
          filter === 'ideas' ? 'bg-amber-600 shadow-xl shadow-gray-50 text-white' : 'bg-amber-50 shadow-none'
        }`}
        onClick={() => setFilter('ideas')}
      >
        <AiOutlineBulb size={18} />
        Ideas
      </button>

      <button
        className={`text-lg flex gap-3 py-2 px-5 text-emerald-600 items-center rounded-xl transition-all duration-300 cursor-pointer hover:shadow-xl ${
          filter === 'projects' ? 'bg-emerald-600 shadow-xl shadow-gray-50 text-white' : 'bg-emerald-50 shadow-none'
        }`}
        onClick={() => setFilter('personal')}
      >
        <GoPerson size={18} />
        Personal
      </button>
    </div>
  );
};

export default Filter;