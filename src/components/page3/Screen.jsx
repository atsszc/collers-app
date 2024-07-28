import React from "react";

function Screen() {
  return (
    <article className="flex flex-col bg-white rounded-[20px] border-white border-solid shadow-xl border-[8px] w-[520px] h-[350px] max-md:w-[400px] max-sm:w-[300px] max-sm:h-[200px] relative z-10">
      <header className="flex gap-2 justify-start px-4 py-2 w-full">
        <div className="w-2 h-2 bg-[#E11D48] rounded-full" />
        <div className="w-2 h-2 bg-[#FBBF24] rounded-full" />
        <div className="w-2 h-2 bg-[#22C55E] rounded-full" />
      </header>
      <main className="flex overflow-hidden flex-col justify-center items-center shadow-xl px-4 py-4 md:px-16 md:py-20 min-h-[200px] md:min-h-[309px] relative">
        <img
          src="/assets/screen.png"
          alt=""
          className="object-cover absolute inset-0 w-full h-full rounded-bl-xl rounded-br-xl"
        />
        <div className="flex w-[144px] pt-6 pr-5 pb-6 pl-7 inset-0 m-auto justify-center items-center bg-[rgba(18,22,25,0.75)] rounded-full relative z-20">
          <div className="w-24 h-24 relative overflow-hidden z-30">
            <img
              src="/assets/play1.png"
              alt=""
              className="w-16 h-18 relative z-40 mt-3 ml-4"
            />
          </div>
        </div>
      </main>
    </article>
  );
}

export default Screen;
