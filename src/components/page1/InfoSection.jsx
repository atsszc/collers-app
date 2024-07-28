import React from 'react';
import InfoCard from './InfoCard';

const InfoSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-20 p-4 md:p-8 lg:p-12">
    <InfoCard
      iconSrc="/assets/icon1.png"
      title="Nibh viverra"
      description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
    />
    <InfoCard
      iconSrc="/assets/icon2.png"
      title="Cursus amet"
      description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
    />
    <InfoCard
      iconSrc="/assets/icon3.png"
      title="Ipsum fermentum"
      description="Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
    />
  </div>
);

export default InfoSection;
