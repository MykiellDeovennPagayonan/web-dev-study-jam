import { FC } from 'react'
import aboutDescription from '@/utils/aboutDescription'

interface aboutProps {

}

const About: FC<aboutProps> = ({ }) => {
  return (
    <div className="w-full flex flex-col md:flex-row p-5 px-8 md:px-16 lg:px-40 py-24 bg-black ">
      <div className="w-full md:w-1/3 text-center md:text-left">
        <h1 className="text-6xl text-center font-bold text-blue-400 h-20 border-b-2 md:border-l-8 md:border-b-0 border-white md:pl-4 md:flex md:items-center mb-8">
          About
        </h1>
        <p className="text-xl font-2xl text-gray-300">
          August 2 - August 11, 2023
        </p>
      </div>
      <div className="w-full md:w-2/3 mt-10 md:mt-0 text-center md:text-left md:pl-10">
        <p className="text-xl text-gray-300" style={{ whiteSpace: 'pre-wrap' }}>{aboutDescription}</p>
      </div>
    </div>
  )
}

export default About
