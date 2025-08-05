import Header from '@/components/Header'
import NoteList from '@/components/NoteList'
import { useState } from 'react'


const Home = () => {
    const [overlay,setOverlay] = useState<boolean>(false)
  return (
    <>
      <Header 
      overlay={overlay}
      setOverlay={setOverlay}
      />
      <NoteList />
    </>
  )
}

export default Home
