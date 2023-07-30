import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Timeline from '@/components/Timeline'
import LessonsPreview from '@/components/lessonsPreview'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-rows-[70px,1fr] min-h-screen w-screen">
      <Navbar page={"home"} />
      <div className="flex flex-col">
        {/* <div className="w-full h-96" style={{ width: '100%', height: '100%' }}>
          <Image
            src="/images/StudyJam.png"
            alt="Description of the image"
            layout="responsive"
            width={1460}
            height={1080}
          />
        </div> */}
        <About />
        <Timeline />
        <LessonsPreview />
      </div>
    </main>
  )
}
