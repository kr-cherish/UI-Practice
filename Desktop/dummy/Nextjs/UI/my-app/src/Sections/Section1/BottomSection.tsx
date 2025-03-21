import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import Image from 'next/image';

const BottomSection = () => {
  return (
    <div >
      
      <div className='flex font-bold text-white ml-25'>
        <div className='text-[30px]'><CiAlarmOn /></div>
        <div className='ml-2 text-[24px]'>Schedule your Vaccination</div>
      </div>

        <div className='flex justify-evenly mt-5 bg-[#C4C4C40D] rounded-[10px]'>
          <div className='mt-3 flex items-center'>
            <div className='text-[30px] text-sky-300 bg-[#C4C4C41A] p-2 rounded-[10px]' ><CiLocationOn /></div>
            <div className='text-[24px] ml-4'>
              <p className='text-[#FFFFFF80;]'>Location</p>
              <p className='text-white'>Ikeja Lagos, Nigeria</p>
            </div>
          </div>
          
          <div className='mt-3 flex items-center'>
          <div className='text-[30px] text-sky-300 bg-[#C4C4C41A] p-2 rounded-[10px]' ><CiCalendarDate /></div>
            <div className='text-[24px] ml-4'>
              <p className='text-[#FFFFFF80;]'>Date</p>
              <p className='text-white'>29 February, 2022</p>
            </div>
          </div>
          
          <div className='mt-3 flex items-center'>
          <div className='text-[30px] text-sky-300 bg-[#C4C4C41A] p-2 rounded-[10px]' ><RiGitRepositoryPrivateLine /></div>
            <div className='text-[24px] ml-4'>
              <p className='text-[#FFFFFF80;]'>Vaccine Type</p>
              <p className='text-white'>Mordena</p>
            </div>
          </div>

          <div className='mt-3 flex items-center'>
              <button className='bg-sky-400 p-3 font-bold rounded-[20px] text-[24px] text-white float-bold'>
                Submit
              </button>
          </div>
        </div>

       <div className='bg-white w-full flex justify-evenly'>
          <Image 
          src="/Images/Logo1.png"
          alt="Logo1"
          width={288.67}
          height={66.39}
          />
          <Image 
          src="/Images/Logo2.png"
          alt="Logo1"
          width={288.67}
          height={117.98}
          />
          <Image 
          src="/Images/Logo3.png"
          alt="Logo1"
          width={288.67}
          height={81.82}
          />
          <Image 
          src="/Images/Logo4.png"
          alt="Logo1"
          width={288.67}
          height={57.9}
          />
       </div>
    </div>
  )
}

export default BottomSection