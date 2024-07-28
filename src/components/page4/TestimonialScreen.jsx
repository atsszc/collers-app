import React from 'react';

const TestimonialScreen = ({
  imageUrl,
  companyLogoUrl,
  companyName,
  testimonial,
  authorName,
  authorTitle
}) => {
  return (
    <div className="flex w-[384px] h-[430px] max-w-full flex-col items-start shrink-0 flex-nowrap bg-white rounded-[20px] border-solid border border-[#e2e8f0] relative overflow-hidden shadow-[0_0_6px_0_rgba(0,0,0,0.07)]">
      <div className="flex pt-8 pr-8 pb-8 pl-8 flex-col gap-4 items-start self-stretch shrink-0 flex-nowrap">
        <div className="flex pt-4 pr-0 pb-4 pl-0 items-center self-stretch shrink-0 flex-nowrap">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${companyLogoUrl})` }} />
            <span className="font-['Roboto'] text-lg font-bold text-[#475569]">
              {companyName}
            </span>
          </div>
        </div>
        <span className="w-full text-lg font-normal text-[#000]">
          {testimonial}
        </span>
        <div className="flex pt-4 pr-0 pb-0 pl-0 gap-4 items-center">
          <div className="w-16 h-16 bg-cover bg-no-repeat rounded-full" style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className="flex flex-col">
            <span className="font-['Roboto'] text-lg text-[#000]">
              {authorName}
            </span>
            <span className="font-['Roboto'] text-base text-[#475569]">
              {authorTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialScreen;
