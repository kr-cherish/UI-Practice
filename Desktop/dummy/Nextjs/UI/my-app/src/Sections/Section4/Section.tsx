import React from "react";
import FirstSection from "./FirstSection";
const Section = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/background.jpeg')" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <FirstSection />
      </div>
    </div>
  );
};

export default Section;