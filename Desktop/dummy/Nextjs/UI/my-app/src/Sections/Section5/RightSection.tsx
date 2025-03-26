import React from 'react'
import Image from 'next/image'
const RightSection = () => {
    return (
        <div className='flex flex-col flex-1 z-50 text-xs'>
            <div className='self-start'>
                <div className='md:w-[200px] md:h-[150px] sm:w-[130px] absolute'>
                    <Image
                        src="/Images/corona.png"
                        width={150}
                        height={150}
                        alt="Corona"
                        className="absolute top-[25px] right-[-80px]"
                    />
                </div>
                <p className=' text-[#17C2EC] px-10 bg-[#C4C4C433] rounded-[10px] my-10 w-fit  py-4'>Loss of sense of taste</p>
            </div>

            <div className='self-center'>
                <div className='w-[200px] h-[150px] absolute'>
                    <Image
                        src="/Images/corona.png"
                        width={150}
                        height={150}
                        alt="Corona"
                        className="absolute top-[25px] right-[-80px]"
                    />
                </div>
                <p className='text-[#17C2EC] bg-[#C4C4C433] rounded-[10px] my-10 w-fit  md:px-10 py-4'>Difficulty Breathing</p>
            </div>

            <div className='self-end'>
                <div className='w-[200px] h-[150px] absolute'>
                    <Image
                        src="/Images/corona.png"
                        width={150}
                        height={150}
                        alt="Corona"
                        className="absolute top-[25px] right-[-30px]"
                    />
                </div>
                <p className='text-[#17C2EC] bg-[#C4C4C433]  my-10 rounded-[10px] w-fit  md:px-10  py-4 '>Sore Throat</p>
            </div>
        </div>
    )
}

export default RightSection