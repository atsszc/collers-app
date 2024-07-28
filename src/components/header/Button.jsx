import React from 'react';

const Button = ({ text, className = '' }) => {
  return (
    <button className={`flex items-center justify-center p-2 md:p-3 lg:p-4 rounded-lg border-2 border-amber-900 border-solid ${className}`}>
      <span className="px-2 md:px-4 text-center">{text}</span>
    </button>
  );
};

export default Button;
