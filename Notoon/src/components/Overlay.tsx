import { RxCross2 } from "react-icons/rx";
import { Textarea } from "@/components/ui/textarea";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState,useRef,useEffect } from "react";
import db from "@/lib/firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface Props{
    setOverlay:(overlay:boolean) => void
}

const Overlay = ({setOverlay}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
    const MAX_LENGTH = 200;
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("personal");
    const [loading,setLoading] = useState(false)

     useEffect(() => {
    inputRef.current?.focus(); 
  }, []);

    const handleSubmit = async() => {
        setLoading(true)
        await addDoc(collection(db,'notes'),{
            title:title,
            description:description,
            category:category,
            star:false,
            timestamp:serverTimestamp()
            })
            setTitle('')
            setDescription('')
            setCategory('personal')
            setOverlay(false)
            setLoading(false)
    }
  return (
    <div className="fixed inset-0 bg-black/40 z-40 flex items-center justify-center">
      <div className="w-[480px] bg-white rounded-md shadow-lg p-6 z-50">
        {/* Modal Header */}
        <div className="flex justify-between items-center border-b-2 pb-2">
          <h2 className="text-2xl font-Poppins font-bold text-black">Create Note</h2>
          <RxCross2 size={30} className="cursor-pointer" onClick={() => setOverlay(false)}/>
        </div>

        {/* Title Input */}
        <div className="mt-3">
          <label className="text-lg font-Poppins">Title</label>
          <Input
            type="text"
            ref={inputRef}
            placeholder="Enter a compelling title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full py-5 rounded-md border-2 border-gray-300 shadow-none mt-1 bg-gray-50"
          />
        </div>

        {/* Content Textarea */}
        <div className="mt-2">
          <label className="text-lg font-Poppins">Content</label>
          <Textarea
            rows={6}
            maxLength={MAX_LENGTH}
            placeholder="Share your thoughts..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-md border-2 border-gray-300 shadow-none mt-1 bg-gray-50"
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {description.length}/{MAX_LENGTH} characters
          </div>
        </div>

        {/* Category Select */}
        <div className="mt-0">
          <label className="text-lg font-Poppins">Category</label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full py-5 rounded-md border-2 border-gray-300 shadow-none mt-1 bg-gray-50">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent side="bottom" sideOffset={4} className="z-[9999]">
              <SelectItem value="ideas">Ideas</SelectItem>
              <SelectItem value="work">Work</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-5">
            <Button className={`w-full py-5 text-lg ${(!title || !description) ? 'cursor-not-allowed' : "cursor-pointer hover:scale-102 hover:shadow-xl" } `}
            disabled={(!title || !description)}
            onClick={handleSubmit}
            >{loading? (<>
            <span className="loading loading-spinner loading-xs"></span>
            <p>Saving....</p>
            </>) :('Save the Notes')}</Button>
        </div>
      </div>
    </div>
  )
}

export default Overlay
