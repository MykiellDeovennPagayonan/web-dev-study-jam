import { FC } from 'react'
import Navbar from '@/components/Navbar'

interface ProjectsProps {
  
}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <main className="grid grid-rows-[90px,1fr] min-h-screen w-screen bg-gray-900 overflow-y-auto">
      <Navbar page={"projects"} />
      <div className='mx-auto my-auto'>
        <p className='text-white'>
          Projects! Tee Hee nothing here yet!
        </p>
      </div>
    </main>
  )
}

export default Projects