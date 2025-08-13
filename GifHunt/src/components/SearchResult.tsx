import { fetchGifs } from "@/lib/Giphy";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { FaDownload } from "react-icons/fa6";

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
interface Props {
  gif: GifItem[]
  setGif: ( gif: GifItem[])=>void;
  searchQuery: string;
}


const SearchResult = ({gif,setGif, searchQuery }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
     const getGify = async () => {
  if (!searchQuery) return;
  setLoading(true);
  try {
    const response = await fetchGifs(searchQuery);
    setGif(response.data);
  } catch (err) {
    console.error(err);
  } finally {
    setTimeout(() =>{
      setLoading(false);
    },3000)
  }
};
    getGify()
  },[searchQuery,setGif])
 

  const handleDownload = async (url: string, filename: string) => {
  const res = await fetch(url);
  const blob = await res.blob();
  const blobUrl = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(blobUrl);
};



  return (
    <div className="mt-10 px-20 pb-30">
  {loading && (
  <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
    {Array.from({ length: 30 }).map((_, idx) => {
      const randomHeight = Math.floor(Math.random() * (300 - 150) + 150); 
      return (
        <div key={idx} className="mb-4 break-inside-avoid">
          <Skeleton
            className={`w-full rounded-xl`}
            style={{ height: randomHeight }}
          />
        </div>
      );
})}
  </div>
)}
{!loading &&<div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3 cursor-pointer"> {/* Masonry style like Instagram */}
    {Array.isArray(gif) &&  gif.map((item) => (
      <div 
        key={item.id} 
        className="relative overflow-hidden rounded-xl group"
      >
        <img 
          src={item?.images?.preview_webp?.url} 
          alt={item?.title} 
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between p-3">
          <p className="text-white text-sm font-medium">{item?.title}</p>
         <FaDownload
         size={20}
  className="cursor-pointer text-white"
  onClick={() => {
  if (item?.images?.original?.url) {
    handleDownload(item.images.original.url, item?.title);
  }
}}
/>
        </div>
      </div>
    ))}
  </div>}
</div>
  );
};

export default SearchResult;
