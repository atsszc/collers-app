import React from 'react';

function Counter() {
  return (
    <div className='flex flex-col gap-8 items-center w-full relative z-[311]'>
      <div className='flex flex-col gap-2 items-center w-full relative z-[312]'>
        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-['Roboto'] font-extrabold leading-none text-[#fffbeb] text-center z-[313]">
          11,658,467
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-['Roboto'] font-extrabold leading-none text-[#fffbeb] text-center z-[314]">
          Shoes Collected
        </span>
      </div>
    </div>
  );
}

export default Counter;
