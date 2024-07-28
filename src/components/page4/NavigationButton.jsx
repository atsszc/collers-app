import React from 'react';

function NavigationButton({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center p-3 border-2 border-amber-900 border-solid shadow rounded-full 
                 max-lg:p-2 max-md:p-2 max-sm:p-1"
    >
      <img
        loading="lazy"
        src={icon}
        alt="Navigation icon"
        className="w-6 h-6 max-lg:w-5 max-lg:h-5 max-md:w-4 max-md:h-4 max-sm:w-3 max-sm:h-3"
      />
    </button>
  );
}

export default NavigationButton;
