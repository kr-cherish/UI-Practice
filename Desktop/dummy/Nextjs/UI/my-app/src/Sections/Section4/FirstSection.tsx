import React from "react";
import Image from "next/image";
const FirstSection = () => {
  return (
    <div className="px-5 md:px-8 md:py-2">
      <div className="text-[#000000] font-bold  text-[24px] md:text-[36px] lg:text-[48px] ">
        Get your vaccine registration  today
      </div>

      <div className="flex flex-col-reverse lg:flex-row lg:item-start">
        <div className="lg:w-1/2 w-full">
          <div className="text-black font-bold text-[14px] md:text-[20px] lg:text-[24px] lg:py-3 md:py-2 my-3">
            <p className="lg:py-2 my-2">Patient’s Full Name</p>
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#0B153C26] w-full  rounded-[10px] p-2 lg:py-2"
            />

            <p className="text-black font-bold lg:py-2 md:my-3 my-2">
              Mobile Number
            </p>
            <p className="text-[#00000080]  md:text-[20px] text-[14px] lg:py-1 md:my-2">
              Notifications for appointment and reminders will be sent to this
              provided number
            </p>

            <div className="flex flex-col md:flex-row md:gap-15 lg:gap-4 lg:py-4 md:my-5 my-4">
              <input
                type="number"
                placeholder="Phone Number"
                className="bg-[#0000001A] rounded-[10px] md:w-2/3  p-1"
              />
              <button className=" bg-sky-400 text-white p-2 md:w-1/3 w-2/4 font-bold rounded-[10px] my-2">
                Verify
              </button>
            </div>

            <button className="bg-sky-400 text-white font-bold w-full h-[45px] rounded-[10px] lg:my-4">
              Submit
            </button>

            <div className="flex justify-center font-bold md:gap-7 md:py-4 py-4 ">
              <p className="text-[#00000080]">Already registered?</p>
              <p className="text-sky-300 cursor-pointer">Check your status</p>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 w-full lg:flex lg:justify-center py-5 ">
          <div className=" relative md:w-[380px] md:h-[480px] sm:w-[289px] sm:h-[418px] rounded-[20px] bg-[#0B153C] flex flex-col md:left-0">
            {/* <p className="font-bold text-white text-center text-[20px] lg:text-[24px]">Covid-19 Vaccine</p> */}

            <Image
              src="/Images/Vacine2.png"
              alt="Vaccine Image"
              width={380}
              height={400}
              className="object-fill md:w-[380px] md:h-[480px] sm:w-[289px] sm:h-[418px] rounded-[20px]"
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
  );
};

export default FirstSection;