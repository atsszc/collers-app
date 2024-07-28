import React from "react";

const Header = () => (
  <>
    <h1 className="font-['Roboto'] text-[56px] max-lg:text-[48px] max-md:text-[40px] max-sm:text-[32px] font-extrabold text-[#0f172a] text-start whitespace-nowrap w-full max-w-[526px]">
      Why join us
    </h1>
    <div className="flex flex-col items-start w-full max-w-[489px]">
      <div className="flex gap-2 items-center w-full">
        <div className="w-6 h-6 relative overflow-hidden">
          <img
            src="/assets/tik.png"
            alt="tikbutton"
            className="w-[13.326px] h-[9.071px] mt-[7.659px] ml-[5.231px]"
          />
        </div>
        <span className="font-['Roboto'] text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-normal leading-[36px] text-[#0f172a] whitespace-nowrap">
          Est et in pharetra magna adipiscing ornare aliquam.
        </span>
      </div>
      <div className="flex gap-2 items-center w-full max-w-[453px]">
        <div className="w-6 h-6 relative overflow-hidden">
          <img
            src="/assets/tik.png"
            alt="tikbutton"
            className="w-[13.326px] h-[9.071px] mt-[7.659px] ml-[5.231px]"
          />
        </div>
        <span className="font-['Roboto'] text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-normal leading-[36px] text-[#0f172a] whitespace-nowrap">
          Tellus arcu sed consequat ac velit ut eu blandit.
        </span>
      </div>
      <div className="flex gap-2 items-center w-full max-w-[416px]">
        <div className="w-6 h-6 relative overflow-hidden">
          <img
            src="/assets/tik.png"
            alt="tikbutton"
            className="w-[13.326px] h-[9.071px] mt-[7.659px] ml-[5.231px]"
          />
        </div>
        <span className="font-['Roboto'] text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px] font-normal leading-[36px] text-[#0f172a] whitespace-nowrap">
          Ullamcorper ornare in et egestas dolor orci.
        </span>
      </div>
    </div>
  </>
);

export default Header;
