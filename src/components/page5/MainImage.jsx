import React from "react";

function MainImage() {
  return (
    <div className="relative flex items-center">
      <article className="flex flex-col bg-white rounded-[20px] border-white border-solid shadow-xl border-[8px] w-[759px] h-[451px] absolute z-[10] max-md:w-[90%] max-md:h-auto">
        <header className="flex flex-row gap-2 justify-start px-4 py-2 w-full">
          <div className="w-[8.33px] h-[8.33px] bg-[#E11D48] rounded-full" />
          <div className="w-[8.33px] h-[8.33px] bg-[#FBBF24] rounded-full" />
          <div className="w-[8.33px] h-[8.33px] bg-[#22C55E] rounded-full" />
        </header>
        <main className="flex overflow-hidden relative flex-col justify-center items-center shadow-xl px-16 py-20 min-h-[413px] max-md:min-h-[auto]">
          <img
            src="/assets/screen.png"
            alt=""
            className="object-cover absolute inset-0 w-full h-full rounded-bl-xl rounded-br-xl"
          />
        </main>
      </article>
      <article className="flex flex-col bg-white rounded-[20px] border-white border-solid shadow-xl border-[8px] w-[759px] h-[451px] absolute z-[20] top-[94px] left-[105px] max-md:w-[90%] max-md:h-auto max-md:top-[10%] max-md:left-[5%]">
        <header className="flex flex-row gap-2 justify-start px-4 py-2 w-full">
          <div className="w-[8.33px] h-[8.33px] bg-[#E11D48] rounded-full" />
          <div className="w-[8.33px] h-[8.33px] bg-[#FBBF24] rounded-full" />
          <div className="w-[8.33px] h-[8.33px] bg-[#22C55E] rounded-full" />
        </header>
        <main className="flex overflow-hidden relative flex-col justify-center items-center shadow-xl px-16 py-20 min-h-[413px] max-md:min-h-[auto]">
          <img
            src="/assets/ayakkabi2.png"
            alt=""
            className="object-cover absolute inset-0 w-full h-full rounded-bl-xl rounded-br-xl"
          />
        </main>
      </article>
      <article className="flex flex-col bg-white rounded-[10px] border-white border-solid shadow-xl border-[3px] w-[256px] h-[286px] absolute z-[30] top-[202px] left-[688px] max-md:w-[70%] max-md:h-auto max-md:top-[20%] max-md:left-[15%]">
        <main className="flex overflow-hidden relative flex-col justify-center items-center shadow-xl px-16 py-20 min-h-[280px] max-md:min-h-[auto]">
          <img
            src="/assets/ayakkabi4.png"
            alt=""
            className="object-cover absolute inset-0 w-full h-full rounded-xl"
          />
        </main>
      </article>
    </div>
  );
}

export default MainImage;