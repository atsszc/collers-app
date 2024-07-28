import React from 'react';
import Header from './components/header/Header';
import MainSection from './components/page1/MainSection';
import MainSec from './components/page6/MainSec';
import WhyJoinUs from './components/page3/WhyJoinUs';
import TestimonialCard from './components/page4/TestimonialCard';
import GrowCollection from './components/page5/GrowCollection';
import PromoSection from './components/page2/PromoSection';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col bg-[linear-gradient(180deg,#FFFBEB_0%,#FFF_89.63%)]">
      <Header />
      <main>
        <MainSection/>
        <PromoSection/>
        <WhyJoinUs/>
        <TestimonialCard/>
        <GrowCollection/>
        <MainSec/>
        <Footer/>
      </main>
    </div>
  );
};

export default App;