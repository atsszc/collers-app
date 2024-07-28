import React from "react";

const DecorativeSquares = () => {
  return (
    <div className="relative flex gap-12 items-start">
      <div className="absolute inset-0 w-full h-full -top-8 -left-8 lg:w-[1358px] lg:h-[527px] lg:top-[-31px] lg:left-[-35px]">
        <div className="absolute inset-0 w-full h-full lg:w-[1358px] lg:h-[478px]">
          <div className="absolute w-20 h-20 bg-[#0369a1] rounded-[50px] opacity-75 top-32 left-10 md:top-32 md:left-44 lg:w-[161px] lg:h-[161px] lg:top-[155px] lg:left-[457px]" />
          <div className="absolute w-24 h-24 bg-[#15803d] rounded-[50px] opacity-75 top-40 left-20 md:top-40 md:left-72 lg:w-[232px] lg:h-[232px] lg:top-[231px] lg:left-[1104.5px]" />
          <div className="absolute w-28 h-28 bg-[#be185d] rounded-[50px] opacity-75 top-44 left-4 md:top-44 md:left-4 lg:w-[271px] lg:h-[271px] lg:top-[294px] lg:left-0" />
        </div>
        <div className="absolute w-full h-full top-64 left-24 md:top-64 md:left-48 lg:w-[463px] lg:h-[202px] lg:top-[325px] lg:left-[756px]">
          <div className="absolute w-16 h-16 bg-[#b45309] rounded-[30px] opacity-75 top-20 left-0 md:w-[130px] md:h-[130px] md:top-20 md:left-0 lg:w-[130px] lg:h-[130px] lg:top-[85px] lg:left-[-11.8px]" />
          <div className="absolute w-24 h-24 bg-[#a21caf] rounded-[30px] opacity-75 top-20 left-24 md:top-20 md:left-52 lg:w-[202px] lg:h-[202px] lg:top-[93px] lg:left-[261px]" />
        </div>
      </div>
    </div>
  );
};

export default DecorativeSquares;
