import { Input } from "@/components/ui/input"
import { RxCross2 } from "react-icons/rx";

interface Props{
    searchQuery:string,
    setSearchQuery:(searchQuery:string) => void
}

const SearchBar = ({searchQuery,setSearchQuery}:Props) => {
  return (
    <div className='w-full h-30 flex justify-center items-center mt-10'>
      <div className="flex w-full max-w-xl items-center gap-2">
        <div className="w-full relative">
  <Input
    type="text"
    placeholder="Search for GIF"
    className="border border-purple-400 py-6 pr-10 bg-slate-800 text-white rounded-lg"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
  {searchQuery && (
     <RxCross2 size={22}
    className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer hover:text-purple-400 transition"
    onClick={() => setSearchQuery("")} // Example: clear input state
  />
  )}
 
</div>
    </div>
    </div>
  )
}

export default SearchBar
