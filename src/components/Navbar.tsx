import { FC } from 'react'
import pageType from '@/utils/pageType'
import Link from "next/link";
import Image from 'next/image'

interface headerProps {
  page: pageType
}

const Navbar: FC<headerProps> = ({ page }) => {
  return (
    <div className='w-full bg-white border-b-4 border-blue-400 flex justify-between items-center px-4 md:px-16 lg:px-40 ' style={{ height: '70px' }}>

      <div className='flex items-center'>
        <div className='grid grid-rows-[1fr, 10px]'>
          <Image src="/images/StudyJam-Logo.png" alt="Hi" width={90} height={70} className='mx-auto' />
        </div>
      </div>

      <div className='flex items-center md:space-x-2 lg:space-x-4 border-2 rounded-full'>
        <Link
          href='/'
          className={`rounded-full w-24 md:w-32 lg:w-40 text-center px-4 py-2 font-bold text-sm md:text-md lg:text-lg ${page === 'home' && 'text-blue-400 bg-gray-900'}`}
          style={{marginLeft: '-0.5 rem', marginRight: '-0.5 rem'}}
        >
          Home
        </Link>
        <Link
          href='/lessons'
          className={`rounded-full w-24 md:w-32 lg:w-40 text-center px-4 py-2 font-bold text-sm md:text-md lg:text-lg ${page === 'lessons' && 'text-blue-400 bg-gray-900'}`}
          style={{marginLeft: '-0.5 rem', marginRight: '-0.5 rem'}}
        >
          Lessons
        </Link>
        <Link
          href='/projects'
          className={`rounded-full w-24 md:w-32 lg:w-40 text-center px-4 py-2 font-bold text-sm md:text-md lg:text-lg ${page === 'projects' && 'text-blue-400 bg-gray-900'}`}
          style={{marginLeft: '-0.5 rem', marginRight: '-0.5 rem'}}
        >
          Projects
        </Link>
        <Link
          href='/winners'
          className={`rounded-full w-24 md:w-32 lg:w-40 text-center px-4 py-2 font-bold text-sm md:text-md lg:text-lg ${page === 'winners' && 'text-blue-400 bg-gray-900'}`}
          style={{marginLeft: '-0.5 rem', marginRight: '-0.5 rem'}}
        >
          Winners
        </Link>
      </div>

    </div>
  )
}

export default Navbar