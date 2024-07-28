import React from 'react';

const ProductCard = ({ title, description, buttonText, imageSrc }) => (
  <div className="flex flex-col h-[472px] sm:h-auto self-stretch grow shrink-0 basis-0 flex-nowrap bg-[#0f172a] rounded-[15px] border-solid border border-[#0f172a] relative overflow-hidden shadow-[0_15px_15px_0_rgba(255,255,255,0.3)]">
    <div className="w-full h-[200px] sm:h-[150px] bg-cover bg-no-repeat">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex pt-8 pr-8 pb-0 pl-8 flex-col gap-4 items-start self-stretch shrink-0 flex-nowrap relative">
      <div className="flex flex-col gap-1 items-start self-stretch shrink-0 flex-nowrap relative">
        <div className="flex gap-2 items-center self-stretch shrink-0 flex-nowrap relative">
          <span className="h-6 grow shrink-0 basis-auto font-['Roboto'] text-2xl sm:text-xl font-bold leading-6 text-[#fff] relative text-left whitespace-nowrap">
            {title}
          </span>
        </div>
      </div>
      <span className="flex w-[330.667px] h-[58px] sm:w-full justify-start items-start self-stretch shrink-0 font-['Roboto'] text-lg sm:text-base font-normal leading-[28.8px] text-[#fff] relative text-left">
        {description}
      </span>
    </div>
    <button className="flex pt-8 pr-8 pb-8 pl-8 gap-4 items-start self-stretch shrink-0 flex-nowrap relative">
      <div className="flex pt-4 pr-4 pb-4 pl-4 justify-center items-center grow shrink-0 basis-0 flex-nowrap rounded-[8px] border-solid border-2 border-[#fff] relative">
        <span className="w-6 h-6 shrink-0 relative overflow-hidden">
          <img src="/assets/buy.png" alt="button" className="w-[17.969px] h-[16px] bg-cover bg-no-repeat mt-1" />
        </span>
        <div className="flex w-[114px] pt-0 pr-4 pb-0 pl-4 justify-center items-center shrink-0 flex-nowrap relative">
          <span className="h-6 shrink-0 basis-auto font-['Roboto'] text-xl sm:text-lg font-medium leading-6 text-[#fff] tracking-[0.5px] relative text-left whitespace-nowrap">
            {buttonText}
          </span>
        </div>
      </div>
    </button>
  </div>
);

export default ProductCard;
