import React from 'react';
import Button from './Button';

const Header = () => {
  return (
    <header className="flex flex-wrap bg-[#FFFBEB] gap-5 justify-between items-center px-4 md:px-10 lg:px-20 py-4 md:py-6 w-full text-amber-900 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold leading-7 md:leading-9">Collers</h1>
      <nav className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium tracking-wide leading-5 md:leading-6">
        <p href="#" className="px-2 py-2 md:py-3 whitespace-nowrap">Products</p>
        <p href="#" className="px-2 py-2 md:py-3 whitespace-nowrap">Solutions</p>
        <p href="#" className="px-2 py-2 md:py-3 whitespace-nowrap">Pricing</p>
        <p href="#" className="px-2 py-2 md:py-3 whitespace-nowrap">Resources</p>
        <p href="#" className="px-2 py-2 md:py-3">Log In</p>
        <Button text="Sign up now" className="mt-2 md:mt-0" />
      </nav>
    </header>
  );
};

export default Header;
