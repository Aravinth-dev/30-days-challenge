import db from "@/lib/firebase"
import { collection,onSnapshot,deleteDoc,updateDoc,doc} from "firebase/firestore"
import { useEffect, useState } from "react"
import Search from "./Search"
import Filter from "./Filter"
import List from "./List"
import EditOverlay from "./EditOverlay"

interface Note{
    id:string,
    title:string,
    description:string,
    star:boolean,
    category:string,
}
const NoteList = () => {
    const [note,setNote] = useState<Note[]>([])
    const [search,setSearch] = useState('')
    const [filter,setFilter] = useState('all')
    const [edit,setEdit] = useState(false)
    const [editNote, setEditNote] = useState<Note | null>(null);

    useEffect(()=>{
        const unsub = onSnapshot(collection(db,"notes"),(snapshot) => {
            const noteData = snapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }))as Note[];
            setNote(noteData)
    })

    return () => unsub();
    },[])

    const handleDelete = (id:string) => {
      deleteDoc(doc(db,"notes",id))
    }
  
    const handleStar = (id:string,star:boolean) => {
      updateDoc(doc(db,"notes",id),{star})
    }
    const handleEdit = (id:string)=>{
      setEdit(true)
      const edit = note.find(note=>note.id===id) || null
      setEditNote(edit)
    }

    console.log(note)
  return (
    <div>
      <Search 
      search ={search}
      setSearch={setSearch}
      />
      <Filter 
      filter = {filter}
      setFilter = {setFilter}
      />
      <List
      note={note.filter((item) =>filter === 'all' ? true : item.category === filter).filter((item) =>!search? true: item.title.toLowerCase().includes(search.toLowerCase()) ||item.description.toLowerCase().includes(search.toLowerCase())).sort((a, b) => (b.star === true ? 1 : 0) - (a.star === true ? 1 : 0))
}
      handleDelete={handleDelete}
      handleStar={handleStar}
      handleEdit={handleEdit}
       />
       {edit && (
  <EditOverlay
    editNote={editNote}
    setEditNote={setEditNote}
    setEdit={setEdit}
  />
)}
    </div>
  )
}

export default NoteList
