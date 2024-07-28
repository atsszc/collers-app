import React from "react";

const Hero = () => (
  <div className="relative">
    <div
      className="absolute w-[1428px] h-[980px] top-[238px] bg-[#FEF3C7]"
      style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 0)" }}
    />
    <div className="flex flex-col md:flex-row pt-20 md:pt-[160px] pr-5 md:pr-[80px] pl-5 md:pl-[80px] gap-10 md:gap-[80px] items-center relative overflow-hidden z-[17]">
      <div className="flex flex-col gap-8 md:gap-[48px] items-start grow flex-nowrap relative z-[18]">
        <div className="flex flex-col gap-8 md:gap-[32px] items-start self-stretch relative z-[19]">
          <div className="flex flex-col gap-2 md:gap-[8px] items-start self-stretch relative z-20">
            <span className="self-stretch font-['Roboto'] text-4xl md:text-[72px] font-extrabold leading-tight text-[#0f172a] relative z-[21]">
              Collectible Sneakers
            </span>
          </div>
          <span className="flex w-full md:w-[714px] justify-start items-start self-stretch font-['Roboto'] text-base md:text-[18px] font-normal leading-normal md:leading-[28.8px] text-[#0f172a] relative text-left z-[22]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </span>
          <div className="flex w-full md:w-[347px] gap-4 md:gap-[16px] items-center relative z-[23]">
            <div className="flex w-full md:w-[179px] p-3 md:p-[16px] justify-center items-center rounded-lg border-solid border-2 border-[#78350f] relative z-[24]">
              <button className="h-6 md:h-[24px] font-['Roboto'] text-lg md:text-[20px] font-medium leading-6 md:leading-[24px] text-[#78350f] tracking-wide md:tracking-[0.5px] relative text-left z-[26]">
                Sign up now
              </button>
            </div>
            <div className="flex w-full md:w-[152px] p-3 md:p-[12px] justify-center items-center rounded-lg relative z-[27]">
              <button className="w-6 md:w-[24px] h-6 md:h-[24px] relative overflow-hidden z-[28]">
                <img
                  src="/assets/button.svg"
                  alt="button1"
                  className="w-5 md:w-[20px] h-5 md:h-[20px] relative z-[29]"
                />
              </button>
              <div className="flex w-full md:w-[112px] p-2 justify-center items-center relative z-30">
                <button className="h-6 md:h-[24px] font-['Roboto'] text-base md:text-[16px] font-medium leading-6 md:leading-[24px] text-[#78350f] tracking-wide md:tracking-[0.5px] relative text-left z-[31]">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[600px] h-auto md:h-[600px] relative z-[32]">
        <img
          src="/assets/nike2.png"
          alt="nike2"
          className="w-full md:w-[486px] h-auto md:h-[388px] absolute top-5 left-0 z-[34] mt-10 md:mt-20"
        />
        <div className="flex w-[367px] h-[372px] gap-[10px] justify-center items-center bg-[#fbbf24] rounded-[50px] absolute top-[150px]  left-[10px] md:left-[51px] z-[33]" />
      </div>
    </div>
  </div>
);

export default Hero;
