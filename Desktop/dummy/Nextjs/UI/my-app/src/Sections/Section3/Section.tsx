import React from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
const Section = () => {
  return (
    <div
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/Section-1-Bg.jpeg')" }}
    >
      <div className="max-w-[1440px] mx-auto px-5 py-3 md:px-10 md:py-10  justify-center">
      <FirstSection />
      <SecondSection />
      </div>
    
    </div>
  );
};

export default Section;
