import React from "react";
import InfoSection from "./InfoSection";
import Hero from "./Hero";

const MainSection = () => (
  <>
    <Hero />
    <div className="flex pt-10 md:pt-20 lg:pt-[80px] px-5 md:px-10 lg:px-[80px] pb-10 md:pb-20 lg:pb-[80px] flex-col gap-10 md:gap-20 lg:gap-[80px] justify-center items-center relative z-[35]">
      <InfoSection />
    </div>
  </>
);

export default MainSection;
