import React from "react";
import LeftSection from "@/Sections/Section5/LeftSEction"
import RightSection from "@/Sections/Section5/RightSection"
import Image from "next/image";
const FirstSection = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 md:pt-2">
            <div className="flex flex-col items-center">
                <div className="text-white font-bold lg:text-[24px] text-center">
                    Covid-19 Prevention
                </div>
                <div className="text-[48px] font-bold">
                    <span className="text-sky-400">Covid-19 </span>
                    <span className="text-white">Prevention</span>
                </div>
                <div className="text-[#FFFFFF80] text-[24px] text-center">
                    Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis
                    aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue
                    arcu donec neque.
                </div>
            </div>

            <div className="flex relative justify-center gap-12">
                
                <LeftSection/>
                <RightSection/>
                <Image
                            src="/Images/Person.png"
                            width={708}
                            height={530}
                            alt="Person"
                            className="absolute  bottom-0"
                        />

            </div>

        </div>
    );
};

export default FirstSection;