import React from 'react';

function BackgroundImg() {
  return (
    <div className='w-full max-w-[1049px] h-auto opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[299] max-md:max-w-[800px] max-sm:max-w-[600px]'>
      <img src='/assets/map.png' alt='map' className='w-full h-auto relative z-[300]' />
    </div>
  );
}

export default BackgroundImg;
