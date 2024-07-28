import React from 'react';

function InfoBox() {
  return (
    <div className='flex w-[256px] h-[200px] flex-col gap-[-8px] justify-center items-center shrink-0 flex-nowrap absolute top-[20px] left-[225px] z-[315] max-md:left-[10%] max-md:top-[10%] max-md:w-[90%] max-md:h-auto'>
      <div className='flex w-[250px] h-[64px] flex-col items-start shrink-0 flex-nowrap bg-[#e2e8f0] rounded-[5px] absolute top-[197px] left-[3px] shadow-[0_0_15px_0_rgba(0,0,0,0.07)] z-[317] max-md:top-[80%] max-md:left-[5%] max-md:w-[90%]'>
        <div className='flex pt-[16px] pr-[16px] pb-[8px] pl-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[318]'>
          <div className="grow shrink-0 basis-0 font-['Roboto'] text-[14px] font-normal leading-[19.6px] relative text-left z-[319] max-md:text-[12px]">
            <span className="font-['Roboto'] text-[14px] font-normal leading-[19.6px] text-[#0f172a] relative text-left max-md:text-[12px]">
              Emma Simpson collected one pair of
            </span>
            <span className="font-['Roboto'] text-[14px] font-bold leading-[19.6px] text-[#0f172a] relative text-left ml-1 max-md:text-[12px]">
              Cool Shoes.
            </span>
          </div>
        </div>
        <img src='/assets/arrowbottom.png' alt='arrowbottom' className='w-[12px] h-[6px] shrink-0 absolute bottom-[-6px] left-1/2 translate-x-[-50%] translate-y-0 z-[320]' />
      </div>
      <article className="flex flex-col bg-white rounded-[10px] border-white border-solid shadow-xl border-[3px] w-[256px] h-[200px] absolute z-[350] max-md:w-full max-md:h-auto">
        <main className="flex overflow-hidden relative flex-col justify-center items-center shadow-xl px-16 py-20 min-h-[192px] max-md:min-h-[auto]">
          <img
            src="/assets/ayakkabi3.png"
            alt=""
            className="object-cover absolute inset-0 w-full h-full rounded-xl"
          />
        </main>
      </article>
    </div>
  );
}

export default InfoBox;
