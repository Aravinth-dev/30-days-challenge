
interface Props{
  search:string,
  setSearch:(search:string)=>void
}

const Search = ({search,setSearch}:Props) => {
  return (
<div className="w-full h-30 flex justify-center items-center">
  <label className="input flex items-center w-[35rem] h-12 px-5 rounded-3xl shadow-md border focus-within:ring-none focus-within:border-none ">
    <svg
      className="w-6 h-6 text-gray-500 mr-3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
     <input type="search" className="grow" placeholder="Search your notes..."
     value={search}
     onChange={(e)=>setSearch(e.target.value)}/>
  </label>
</div>
  )
}

export default Search
