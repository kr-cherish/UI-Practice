import React from 'react'

const SecondSection = () => {
    return (
        <div className='bg-[#C4C4C40D] lg:rounded-[20px]' >
            <div className='text-white bg-[#C4C4C40D] font-bold mt-3 lg:mt-15 lg:text-[24px] md:text-[20px] text-[10px]  md:p-3 md:rounded-[20px] p-2 rounded-[10px]'>Check your COVID-19 result on our Database</div>
            <div className="flex lg:items-center gap-3 justify-center lg:mt-7 md:mt-5 mt-3 lg:flex-row flex-col lg:px-50 lg:py-5 md:px-40 md:py-2">
                <div className=" border-[3px] border-sky-300 lg:rounded-[20px] md:rounded-[10px] p-2 lg:h-[69px]  md:h-[482px]  h-[50px] text-white flex-1 rounded-[10px]">
                    Okeowo
                </div>
                <div className=" lg:h-[69px]  md:h-[69px] p-2  h-[50px] border-[3px] lg:rounded-[20px]  md:rounded-[10px] border-[#C4C4C426] text-white  flex-1 rounded-[10px]">
                    NIK Name
                </div>
                <button className="md:text-[20px] text-[14px] border-[3px] border-sky-300 lg:rounded-[20px]  md:rounded-[10px] lg:text-[24px] rounded-[10px] text-sky-300 font-bold  lg:px-5 lg:py-2 md:px-3 md:py-1 px-2 py-1 self-start ">
                    Check
                </button>

            </div>
            <div className='lg:px-50 lg:py-5 md:px-20 md:py-2 '>
                <div className='text-sky-300 font-bold bg-[#C4C4C40D] text-center py-4 rounded-[10px] text-[10px] mt-2 md:text-[14px] lg:text-[24px] lg:mt-2'>
                    Need a certificate for your COVID-19 result? Please click here
                </div>
            </div>
        </div>

    )
}

export default SecondSection    