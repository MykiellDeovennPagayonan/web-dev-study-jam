import { FC } from 'react'
import Navbar from '@/components/Navbar'

interface LessonsProps {
  
}

const Lessons: FC<LessonsProps> = ({}) => {
  return (
    <main className="grid grid-rows-[90px,1fr] min-h-screen w-screen bg-gray-900">
      <Navbar page={"lessons"} />
      <div className='mx-auto my-auto'>
        <p className='text-white'>
          Lessons! Tee Hee nothing here yet!
        </p>
      </div>
    </main>
  )
}

export default Lessons