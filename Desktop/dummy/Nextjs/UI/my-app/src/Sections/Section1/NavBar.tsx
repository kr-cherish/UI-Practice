// import React, { useState } from 'react'

// const NavBar = () => {
//   const [Opne, isOpen] = useState('false');
//     return (
  
//     <div className='flex justify-between'>
//       <div className='text-[35px] font-extrabold text-white flex items-center'>vaccination.ng</div>
     
//       <div className='flex gap-6 items-center text-[24px] '>
//         <div className='font-extrabold text-white'>Home</div>
//         <div className=' font-extrabold  text-white'>Services</div>
//         <div className=' font-extrabold  text-white'>Schedule</div>
//         <div className=' font-extrabold  text-white'>Contact us</div>
//       </div>

//       <div className="">
//         <button className="rounded-2xl font-extrabold px-[26px] py-[20px] bg-[#C4C4C41A] text-[#17C2EC] shadow-lg shadow-black/25 text-[24px]">Check Status</button>
//       </div>  
//     </div>
  
//     )
// }

// export default NavBar

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="flex justify-between items-center ">
      
        <div className="text-[18px] md:text-[25.5px] lg:[32px] font-extrabold text-white">
          vaccination.ng
        </div>

        
        <div className="hidden lg:flex lg:gap-4 text-[20px] xl:text-[24px]">
          <div className="font-extrabold text-white">Home</div>
          <div className="font-extrabold text-white">Services</div>
          <div className="font-extrabold text-white">Schedule</div>
          <div className="font-extrabold text-white">Contact us</div>
        </div>

        
        <div className="hidden lg:block">
          <button className="rounded-2xl font-extrabold px-[20px] py-[14px] md:px-[26px] md:py-[20px] bg-[#C4C4C41A] text-[#17C2EC] shadow-lg shadow-black/25 text-[20px] md:text-[24px]">
            Check Status
          </button>
        </div>

        
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 text-[20px]">
          <div className="font-extrabold text-white">Home</div>
          <div className="font-extrabold text-white">Services</div>
          <div className="font-extrabold text-white">Schedule</div>
          <div className="font-extrabold text-white">Contact us</div>
          <button className="rounded-2xl font-extrabold px-[20px] py-[14px] bg-[#C4C4C41A] text-[#17C2EC] shadow-lg shadow-black/25 text-[20px]">
            Check Status
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
