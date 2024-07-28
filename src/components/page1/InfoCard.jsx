import React from 'react';

const InfoCard = ({ iconSrc, title, description }) => (
  <div className="flex flex-col gap-2.5 items-start w-full md:w-auto relative z-37">
    <div
      className="flex justify-center items-center w-[75px] h-[75px] bg-cover bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${iconSrc})` }}
    />
    <div className="flex flex-col gap-4 items-start relative overflow-hidden">
      <div className="flex gap-2 items-center">
        <span className="font-['Roboto'] text-lg md:text-[20px] font-medium text-[#0f172a]">
          {title}
        </span>
      </div>
      <span className="font-['Roboto'] text-base md:text-[18px] font-normal text-[#0f172a]">
        {description}
      </span>
    </div>
  </div>
);

export default InfoCard;
