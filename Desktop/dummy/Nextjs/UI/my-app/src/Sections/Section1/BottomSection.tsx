import React from 'react'
import { CiAlarmOn } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import Image from 'next/image';

const BottomSection = () => {
  return (
    <div >
      <div className='flex font-bold text-white  mt-13 md:mt-15 lg:mt-20'>
        <div className='md:text-[30px] text-[20px]'><CiAlarmOn /></div>
        <div className='ml-2 md:text-[24px] text-[14px]'>Schedule your Vaccination</div>
      </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center'>
            <div className='md:text-[30px] text-[15px] text-sky-300 bg-[#C4C4C41A] p-2 rounded-[10px]' ><CiLocationOn /></div>
            <div className='md:text-[24px] text-[14px] md:ml-4 ml-2'>
              <p className='text-[#FFFFFF80;]'>Location</p>
              <p className='text-white'>Ikeja Lagos, Nigeria</p>
            </div>
          </div>
          
          <div className='mt-3 flex items-center'>
          <div className='md:text-[30px] text-[15px] text-sky-300 bg-[#C4C4C41A] p-2 rounded-[10px]' ><CiCalendarDate /></div>
            <div className='md:text-[24px] text-[14px] md:ml-4 ml-2'>
              <p className='text-[#FFFFFF80;]'>Date</p>
              <p className='text-white'>29 February, 2022</p>
            </div>
          </div>
          
          <div className='mt-3 flex items-center'>
          <div className='md:text-[30px] text-[15px] text-sky-300 bg-[#C4C4C41A] p-2 rounded-[10px]' ><RiGitRepositoryPrivateLine /></div>
            <div className='md:text-[24px] text-[14px] md:ml-4 ml-2'>
              <p className='text-[#FFFFFF80;]'>Vaccine Type</p>
              <p className='text-white'>Mordena</p>
            </div>
          </div>

          <div className='mt-3 flex items-center'>
              <button className='bg-sky-400 md:p-3 p-1.5 font-bold rounded-[10px] md:rounded-[20px] md:text-[24px] text-[14px] w-[150px] h-[50px] md:w-[253px] md:h-[64px] lg:w-[142px] lg:h-[69px] text-white float-bold'>
                Submit
              </button>
          </div>
        </div>

       {/* <div className=' p-3 bg-white opacity-[50%] flex justify-evenly'>
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
       </div> */}
    </div>
  )
}

export default BottomSection