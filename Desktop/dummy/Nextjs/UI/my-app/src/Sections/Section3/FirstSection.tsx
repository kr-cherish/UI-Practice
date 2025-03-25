import React from "react";

const FirstSection = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-center md:flex md:flex-col md:justify-center">
      <div className="lg:w-[50%] sm:w-full lg:text-[47.9px] md:text-[36px] text-[24px] font-bold text-white">
        Why get vaccinated <span>today?</span>
      </div>
      <div className="lg:w-[50%] sm:w-full lg:flex lg:justify-center md:mt-[15px] mt-[10px]">
        <p className="text-[#FFFFFF80] md:text-[19.96px] text-[14px]">
          Magna adipiscing at elit at ornare lectus nibh lorem.Ac, sed ac lorem
          pellentesque vestibulum risus matti.In molestie condimentum malesuada
          non.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
