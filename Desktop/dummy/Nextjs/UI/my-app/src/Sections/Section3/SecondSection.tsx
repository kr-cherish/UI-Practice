import React from "react";
import { Trophy } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Twitter } from 'lucide-react';
const SecondSection = () => {
  return (
    <div className="flex lg:flex-row lg:justify-between lg:items-end lg:py-8  flex-col py-5">
      <div className="md:w-[449.06px] md:h-[498.96px] w-[276px] h-[280px]  bg-[#C4C4C433] md:rounded-tr-[149.69px] md:rounded-[49.9px] rounded-tr-[80px] rounded-[20px] mt-4  md:px-10 md:py-10 px-5 py-5">
        <div className="bg-[#C4C4C41A] md:rounded-[29px] rounded-[15px] md:w-[99.9px] md:h-[50px] w-[50px] h-[50px] flex justify-center items-center md:flex md:justify-center md:items-center">
          <p className="text-sky-300 md:text-2xl text-xl"><Trophy /></p>
        </div>
        <div className="text-sky-300 font-bold md:text-[23.95px] text-[14px] md:mt-10 mt-4">
          Protects your immune system against viruses
        </div>
        <div className="text-[#FFFFFF] md:text-[17.96px] text-[12px] md:mt-10 mt-4">
          Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
        </div>
        <div className="md:flex md:items-center flex flex-items-center md:mt-10 mt-4 text-sky-300 font-bold md:text-[17.96px] text-[12px]">
          <span>Read More</span><ArrowRight />
        </div>
      </div>

      <div className="md:flex md:flex-row flex-col lg:gap-25 md:gap-15 md:mt-5" >
        <div className="lg:w-[349.27px] lg:h-[349.27px] md:w-[296px] md:h-[290px] w-[188px] h-[202px]  border-[3px] border-white md:rounded-[49.9px] rounded-[20px] mt-6 md:px-10 md:py-10 px-5 py-5">
          <div className="bg-[#C4C4C41A] rounded-[20px] md:w-[48.9px] md:h-[48.9px] w-[30px] h-[30px] flex justify-center items-center ">
            <p className="text-sky-300 text-1xl"><UsersRound /></p>
          </div>
          <div className="text-sky-300 font-bold lg:text-[23.95px] md:text-[20px] text-[14px] lg:mt-10 md:mt-7 mt-3">
            Minimize the spread of the Virus
          </div>
          <div className="md:flex md:items-center flex items-center  md:mt-5 mt-3 text-[#FFFFFF80] font-bold md:text-[17.96px] text-[14px]">
            <span>Read More</span><ArrowRight />
          </div>
        </div>

        <div className="lg:w-[349.27px] lg:h-[349.27px] md:w-[296px] md:h-[290px] w-[188px] h-[202px] border-[3px] border-white md:rounded-[49.9px] rounded-[20px] mt-6 md:px-10 md:py-10 px-5 py-5 ">
          <div className="bg-[#C4C4C41A] rounded-[20px] w-[48.9px] h-[48.9px] flex justify-center items-center ">
            <p className="text-sky-300 text-1xl"><Twitter /></p>
          </div>
          <div className="text-sky-300 font-bold md:text-[23.95px] text-[14px] md:mt-7 lg:mt-10 mt-3">
            Protect yourself
          </div>
          <div className="md:flex md:items-center flex items-center md:mt-5 mt-3 lg:mt-10 text-[#FFFFFF80] font-bold md:text-[17.96px] text-[14px]">
            <span>Read More</span><ArrowRight />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SecondSection;
