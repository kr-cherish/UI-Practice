import React from "react";
import FirstSection from "./FirstSection";
const Section = () => {
  return (
    <div
      className="w-full bg-cover bg-center "
      style={{ backgroundImage: "url('/Images/Section-1-Bg.jpeg')" }}
    >
      <FirstSection />
    </div>
  );
};

export default Section;