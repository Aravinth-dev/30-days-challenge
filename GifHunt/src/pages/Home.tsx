import Header from "@/components/Header"
import RandomInput from "@/components/RandomInput"
import SearchBar from "@/components/SearchBar"
import SearchResult from "@/components/SearchResult"
import { useState } from "react"

interface GifItem {
  id: string;
  title: string;
  images: {
    preview_webp?: {
      url?: string;
    };
    original?: {
      url?: string;
    };
  };
}


const Home = () => {
    const [searchQuery,setSearchQuery] = useState('')
    const [gif, setGif] = useState<GifItem[]>([]);
  return (
    <div className="w-full min-h-screen bg-[#0f172a]">
      <Header />
      <SearchBar 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery} />
     <RandomInput 
     setGif={setGif}
      setSearchQuery={setSearchQuery} />
     <SearchResult 
     gif={gif}
     setGif={setGif}
      searchQuery={searchQuery}/>
    </div>
  )
}

export default Home
