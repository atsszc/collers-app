import React from 'react';
import BackgroundImg from './BackgroundImg';
import DecorativeCircle from './DecorativeCircle';
import Counter from './Counter';
import InfoBox from './InfoBox';

function MainSec() {
  return (
    <div className='flex h-auto min-h-[717px] p-5 sm:p-10 md:p-16 lg:p-20 xl:p-24 flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-20 xl:gap-24 justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#78350f] relative z-[298]'>
      <BackgroundImg />
      <DecorativeCircle />
      <Counter />
      <InfoBox />
    </div>
  );
}

export default MainSec;
