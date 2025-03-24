import React from 'react'
import Image from 'next/image'
const FirstSection = () => {
  return (
    <div className='bg-white'>
        <div className='flex items-center justify-between max-w-[1440px] mx-auto text-[#FFFFFF80] grayscale-[0.9]'>
            <Image
            src="/Images/Logo1.png"
            alt="Demo"
            width={288.67}
            height={66.39} 
            className='lg:w-[288.67px] lg:h-[66.39px] md:w-[148.44px] md:h-[34.14px] w-[72.48px] h-[16.67px]'
            />
             <Image
            src="/Images/Logo2.png"
            alt="Demo1"
            width={288.67}
            height={66.39} 
            className='lg:w-[288.67px] lg:h-[117.98px] md:w-[148.44px] md:h-[60.67px] w-[72.48px] h-[29.62px]'
            />
             <Image
            src="/Images/Logo3.png"
            alt="Demo2"
            width={288.67}
            height={66.39} 
            className='lg:w-[288.67px] lg:h-[81.82px] md:w-[148.44px] md:h-[42.08px] w-[72.48px] h-[20.55px]'
            />
             <Image
            src="/Images/Logo4.png"
            alt="Demo4"
            width={288.67}
            height={66.39} 
            className='lg:w-[288.67px] lg:h-[57.09px] md:w-[148.44px] md:h-[29.77px] w-[72.48px] h-[14.54px]'
            />
        </div>
    </div>
  )
}

export default FirstSection