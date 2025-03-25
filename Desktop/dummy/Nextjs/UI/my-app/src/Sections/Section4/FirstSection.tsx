import React from 'react'
import Image from 'next/image'
const FirstSection = () => {
    return (

        <div className="">

            <div className="text-[#000000] font-bold left-0 text-[24px] md:text-[36px] lg:text-[48px] ">
                Get your vaccine registration today
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:items-start gap-y-10 lg:gap-x-8 ">

                <div className="lg:w-1/2 w-full px-6 py-8">
                    <div className="text-black font-bold text-[14px] md:text-[20px] lg:text-[24px]">
                        <p>Patient’s Full Name</p>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-[#0B153C26] w-full lg:w-[635px] h-[60px] lg:h-[70px] rounded-[10px] p-2"
                        />


                        <p className="text-black font-bold">Mobile Number</p>
                        <p className="text-[#00000080] text-sm">
                            Notifications for appointment and reminders will be sent to this provided number
                        </p>

                        <div className="flex flex-col md:flex-row md:gap-15 lg:gap-4 ">
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="bg-[#0000001A] rounded-[10px] md:w-[450px] sm:w-[400px] h-[60px] lg:h-[70px] p-2"
                            />
                            <button className=" bg-sky-400 text-white p-2 sm:w-[150px] sm:h-[50px] md:w-[201px] md:h-[60px] lg:h-[69px] font-bold rounded-[10px]">
                                Verify
                            </button>
                        </div>


                        <button className="bg-sky-400 text-white font-bold w-full lg:w-full h-[60px] lg:h-[69px] rounded-[10px]">
                            Submit
                        </button>

                        <div className="flex justify-center font-bold mt-5 gap-2">
                            <p className="text-[#00000080]">Already registered?</p>
                            <p className="text-sky-300 cursor-pointer">Check your status</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="lg:w-1/2 w-full flex justify-center h-fit">
                    <div className=" relative w-[380px] h-[550px] rounded-[20px] bg-[#0B153C] flex flex-col items-center">
                        {/* <p className="font-bold text-white text-center text-[20px] lg:text-[24px]">Covid-19 Vaccine</p> */}
                        
                        <Image
                            src="/Images/Vacine2.png"
                            alt="Vaccine Image"
                            width={380}
                            height={450}
                            className="object-fill w-[380px] h-[550px] rounded-[20px]"
                        />

                        <div className="absolute top-[-20px] left-[-40px]">
                            <Image
                                src="/Images/corona2.png"
                                alt="Corona2"
                                width={110}
                                height={110}
                                className=""
                            />
                        </div>

                        <button className="absolute text-[16px] sm:text-[18px] lg:text-[20px] text-white bg-[#C4C4C440] bottom-[40px] lg:bottom-[50px] left-1/2 transform -translate-x-1/2 font-bold rounded-[10px] p-2">
                            Verify Status
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default FirstSection