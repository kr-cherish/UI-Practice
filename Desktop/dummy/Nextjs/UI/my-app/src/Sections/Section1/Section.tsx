import React from 'react'
import Navbar from "@/Sections/Section1/NavBar"
import MiddleSection from './MiddleSection'
import BottomSection from './BottomSection'
const Section1 = () => {
  return (
    <div className=''>
      <div className="w-full bg-cover bg-center "
        style={{ backgroundImage: "url('/Images/Section-1-Bg.jpeg')" }}>
        <div className='max-w-[1440px] mx-auto px-5 py-3'>
          <Navbar />
          <MiddleSection />
          <BottomSection />
        </div>

      </div>
    </div>
  )
}

export default Section1