import React from 'react'
import Image from 'next/image'

const MiddleSection = () => {
  return (
    <div className='flex lg:flex-row flex-col w-full'>
      <div className='lg:w-1/2 w-full '>
        <div className='lg:mt-10 md:mt-6 mt-4'>
          <div className='text-[#17C2EC] font-bold text-[12px] md:text-[18px] lg:text-[24px]'>Get Vaccinated. Boost your Immune System</div>
        </div>
        <div className='mt-5 md:mt-10 lg:mt-15'>
          <p className='text-[white] font-bold text-[24px] md:text-[36px] lg:text-[48px]'>COVID-19 Vaccination</p>
          <span className='text-white font-bold text-[24px] md:text-[36px] lg:text-[48px]'>Got Easier With,</span>
          <p className='text-[#17C2EC] font-bold text-[24px] md:text-[36px] lg:text-[48px]'>Vaccination.ng</p >
        </div>
        <div className='mt-4 md:mt-6 lg:mt-10  text-[white] text-[14px] md:text-[20px] lg:text-[24px] font-bold'>
          <p>Vaccination.ng will help you find the nearestcentre for vaccination, in all 36 states in Nigeria.</p>
        </div>
        <div className='mt-5 md:mt-10 lg:mt-15  text-[14px] md:text-[20px] lg:text-[24px] text-white'>
          <button className='rounded-[15px] px-5 py-3 font-bold bg-[#17C2EC]'>Get Vaccine</button>
          <button className="ml-5 border-2 border-sky-500 rounded-[15px] px-5 py-3 font-bold bg-[#C4C4C41A] text-white shadow-lg shadow-black/25">
            Help Center
          </button>
        </div>
      </div>
      <div className='lg:w-1/2 mt-10 md:mt-13 w-full flex flex-row-reverse justify-center'>
        <div className="bg-[#17C2EC] md:w-[532px] w-[256px] rounded-[43px] relative flex items-center">
          <Image
            src="/Images/Vacine.png"
            alt="Vaccine"
            width={532}
            height={571}
            className="rounded-[10px] w-[256px] h-[274.7px] md:w-[532px] md:h-[571px]"
          />

          <div className="absolute  md:left-[-50px] bg-white w-[50px] h-[50px] left-[-25px] rounded-[10px] md:w-[100px] md:h-[100px] md:rounded-[20px] flex justify-center items-center ">
            <Image
              src="/Images/Doctor.png"
              alt="Doctor Image"
              width={80}
              height={65.39}
              className="rounded-[5px] w-[40px] h-[32.69px] md:w-[80px] md:[65.39] "
            />
          </div>
              
          <div className='absolute  md:right-[-50px] right-[-25px] bg-white w-[50px] h-[50px] md:w-[100px] md:h-[100px] md:rounded-[20px] rounded-[10px] flex justify-center items-center '>
          <Image
              src="/Images/corona.png"
              alt="Doctor Image"
              width={80}
              height={73.04 }
              className="rounded-[5px]"
            />
          </div>
          <div className='flex absolute items-center md:bottom-[-30px] left-[-30px] bottom-[-30px] md:left-[-40px] rounded-[20px] md:p-4 p-2 bg-[#C4C4C433]'
             style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.4)" }}
          >
          <Image
              src="/Images/Doctor1.png"
              alt="Doctor Image"
              width={60}
              height={60}
              className="md:rounded-[20px] rounded-[6px] object-contain w-[38.8px] h-[38.8px] md:w-[60px] md:h-[60px]"
            />
            <Image
              src="/Images/Doctor2.png"
              alt="Doctor Image"
              width={60}
              height={60 }
              className="md:rounded-[20px] rounded-[6px] object-contain w-[38.8px] h-[38.8px] md:w-[60px] md:h-[60px]"
            />
            <Image
              src="/Images/Doctor3.png"
              alt="Doctor Image"
              width={60}
              height={60}
              className="md:rounded-[20px] rounded-[6px] object-contain w-[38.8px] h-[38.8px] md:w-[60px] md:h-[60px]"
            />
            <div className='md:pl-4 md:pt-3 pl-2 pt-3 text-[14px] md:text-[24px] font-extrabold'>
            <p className='text-white'>20+</p><p className='text-sky-400 '>Specialists</p>
            </div>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default MiddleSection
