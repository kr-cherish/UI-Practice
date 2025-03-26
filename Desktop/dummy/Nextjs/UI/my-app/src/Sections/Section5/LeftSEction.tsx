import React from 'react'
import Image from 'next/image'
const LeftSEction = () => {
    return (
        <div className='flex flex-col flex-1 z-50 text-xs'>

            <div className="self-end relative">
                <div className='md:w-[200px] md:h-[150px]  absolute'>
                <Image
                    src="/Images/corona.png"
                    width={150}
                    height={150}
                    alt="Corona"
                    className="absolute top-[25px] left-[-80px]"
                />
                </div>
                <p className="text-[#17C2EC] bg-[#C4C4C433] rounded-[10px] my-10 w-fit py-4 md:px-10 px-4 relative">
                    High Fever
                </p>
            </div>

            <div className=' self-center relative'>
            <div className='w-[200px] h-[150px] absolute'>
                <Image
                    src="/Images/corona.png"
                    width={150}
                    height={150}
                    alt="Corona"
                    className="absolute top-[25px] left-[-80px]"
                />
                </div>
                <p className='text-[#17C2EC] bg-[#C4C4C433] rounded-[10px] my-10 w-fit md:px-10  py-4'>Loss sense of smell  </p>
            </div>

            <div className='self-start'>
            <div className='w-[200px] h-[150px] absolute'>
                <Image
                    src="/Images/corona.png"
                    width={150}
                    height={150}
                    alt="Corona"
                    className="absolute top-[25px] left-[-80px]"
                />
                </div>
                <p className='text-[#17C2EC] bg-[#C4C4C433]  my-10 rounded-[10px] w-fit  md:px-10 px-4 py-4 '>Dry cough</p>
            </div>
        </div>
    )
}

export default LeftSEction  