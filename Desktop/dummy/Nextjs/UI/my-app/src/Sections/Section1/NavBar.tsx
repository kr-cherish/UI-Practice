import React, { useState } from 'react'

const NavBar = () => {
    const [menuOpen, setmenuOpen] = useState(false)
  return (
  
    <div className='flex justify-between'>
      <div className='text-[35px] font-extrabold text-white flex items-center'>vaccination.ng</div>
     
      <div className='flex gap-6 items-center text-[24px] '>
        <div className='font-extrabold text-white'>Home</div>
        <div className=' font-extrabold  text-white'>Services</div>
        <div className=' font-extrabold  text-white'>Schedule</div>
        <div className=' font-extrabold  text-white'>Contact us</div>
      </div>

      <div className="">
        <button className="rounded-2xl font-extrabold px-[26px] py-[20px] bg-[#C4C4C41A] text-[#17C2EC] shadow-lg shadow-black/25 text-[24px]">Check Status</button>
      </div>  
    </div>
  
    )
}

export default NavBar