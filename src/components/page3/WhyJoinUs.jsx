import React from "react";
import WhyJoinUsHeader from "./WhyJoinUsHeader";
import SignUp from "./SignUp";
import Screen from "./Screen";

const WhyJoinUs = () => (
  <div className="flex flex-col pt-[160px] pr-[80px] pb-[160px] pl-[80px] bg-[#FFFCF3] items-start self-stretch shrink-0 relative overflow-hidden max-lg:px-[40px] max-md:pt-[80px] max-md:pb-[80px] max-sm:pt-[40px] max-sm:pb-[40px] max-sm:px-[20px]">
    <div className="flex flex-row h-[496px] md:h-[496px] pt-[80px] pr-[80px] pb-[80px] pl-[80px] gap-[80px] self-stretch shrink-0 bg-[#fff] rounded-[30px] relative shadow-[0_0_10px_0_rgba(0,0,0,0.07)] max-md:flex-col max-md:h-[400px] max-md:pt-[40px] max-md:pr-[40px] max-md:pb-[40px] max-md:pl-[40px] max-sm:pt-[20px] max-sm:pr-[20px] max-sm:pb-[20px] max-sm:pl-[20px] max-sm:h-[300px]">
      <div className="flex flex-col gap-[24px] flex-1 max-md:mb-[24px]">
        <WhyJoinUsHeader />
        <SignUp />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Screen />
      </div>
      <div className="w-[90px] h-[90px] bg-[#B45309] rounded-[30px] absolute opacity-75 top-[98px] left-[660px] max-lg:left-[550px] max-md:w-[60px] max-md:h-[60px] max-md:top-[80px] max-md:left-[400px] max-sm:left-[200px]" />
      <div className="w-[666.28px] h-[217.93px] bg-[#FDE68A] absolute top-[143px] left-[605px] -rotate-45 max-lg:w-[500px] max-lg:h-[180px] max-lg:top-[120px] max-lg:left-[450px] max-md:w-[350px] max-md:h-[120px] max-md:top-[100px] max-md:left-[300px] max-sm:w-[200px] max-sm:h-[80px] max-sm:top-[60px] max-sm:left-[150px]" />
      <div className="w-[85px] h-[86px] bg-[#15803D] rounded-[50px] absolute top-[373px] left-[750px] opacity-75 z-[15] max-lg:left-[600px] max-md:w-[60px] max-md:h-[60px] max-md:top-[300px] max-md:left-[400px] max-sm:left-[200px]" />
      <div className="w-[218px] h-[218px] bg-[#BE185D] rounded-[50px] absolute top-[314px] left-[1087.5px] opacity-75 max-lg:w-[160px] max-lg:h-[160px] max-lg:left-[900px] max-md:w-[120px] max-md:h-[120px] max-md:top-[250px] max-md:left-[600px] max-sm:w-[80px] max-sm:h-[80px] max-sm:top-[200px] max-sm:left-[400px]" />
      <div className="w-[74px] h-[74px] bg-[#A21CAF] rounded-[30px] absolute top-[393px] left-[1063px] opacity-75 max-lg:left-[850px] max-md:w-[50px] max-md:h-[50px] max-md:top-[300px] max-md:left-[550px] max-sm:left-[350px]" />
      <div className="w-[59px] h-[60px] bg-[#0369A1] rounded-[50px] absolute top-[-15px] left-[1118px] opacity-75 max-lg:left-[950px] max-md:w-[40px] max-md:h-[40px] max-md:top-[0px] max-md:left-[750px] max-sm:w-[30px] max-sm:h-[30px] max-sm:left-[450px]" />
    </div>
  </div>
);

export default WhyJoinUs;
