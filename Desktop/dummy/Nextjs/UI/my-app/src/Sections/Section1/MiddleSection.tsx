import React from 'react'
import Image from 'next/image'

const MiddleSection = () => {
  return (
    <div className='flex w-full'>
      <div className='w-1/2 '>
        <div className='mt-10  text-[24px]'>
          <p className='text-[#17C2EC] font-bold ml-25 '>Get Vaccinated. Boost your Immune System</p>
        </div>
        <div className='mt-15 ml-25 '>
          <p className='text-[white] font-bold  text-[48px]'>COVID-19 Vaccination</p>
          <span className='text-white font-bold text-5xl '>Got Easier With,</span>
          <p className='text-[#17C2EC] text-[48px] font-bold '>Vaccination.ng</p >
        </div>
        <div className='mt-10 ml-25 text-[white] text-[22px] font-bold h-[58px] w-[610px]'>
          <p>Vaccination.ng will help you find the nearest</p>
          <span>centre for vaccination, in all 36 states in Nigeria.</span>
        </div>
        <div className='mt-15 ml-25 text-[24px] text-white'>
          <button className='rounded-[15px] px-5 py-3 font-bold bg-[#17C2EC]'>Get Vaccine</button>
          <button className="ml-5 border-2 border-sky-500 rounded-[15px] px-5 py-3 font-bold bg-[#C4C4C41A] text-white shadow-lg shadow-black/25">
            Help Center
          </button>
        </div>
      </div>
      <div className='w-1/2 mt-13 flex flex-row-reverse justify-center'>
        <div className="bg-[#17C2EC] w-[532px] rounded-[43px] relative flex items-center">

          <Image
            src="/Images/Vacine.png"
            alt="Vaccine"
            width={532}
            height={571}
            className="rounded-[10px]"
          />

          <div className="absolute  left-[-50px] bg-white w-[100px] h-[100px] rounded-[20px] flex justify-center items-center ">
            <Image
              src="/Images/Doctor.png"
              alt="Doctor Image"
              width={80}
              height={65.39}
              className="rounded-[5px]"
            />
          </div>
              
          <div className='absolute  right-[-50px] bg-white w-[100px] h-[100px] rounded-[20px] flex justify-center items-center '>
          <Image
              src="/Images/corona.png"
              alt="Doctor Image"
              width={80}
              height={73.04 }
              className="rounded-[5px]"
            />
          </div>
          <div className='flex absolute bottom-[-40px] left-[-40px] rounded-[20px] p-4 bg-[#C4C4C433]'
             style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.4)" }}
          >
          <Image
              src="/Images/Doctor1.png"
              alt="Doctor Image"
              width={60}
              height={50}
              className="rounded-[20px] object-contain  "
            />
            <Image
              src="/Images/Doctor2.png"
              alt="Doctor Image"
              width={60}
              height={50 }
              className="rounded-[20px] object-contain "
            />
            <Image
              src="/Images/Doctor3.png"
              alt="Doctor Image"
              width={60}
              height={50}
              className="rounded-[20px] object-contain "
            />
            <div className='pl-4 pt-3 text-[24px] font-extrabold'>
            <p className='text-white'>20+</p><p className='text-sky-400 '>Specialists</p>
            </div>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default MiddleSection