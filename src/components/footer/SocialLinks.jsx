import React from 'react';

function SocialLinks() {
  const socialIcons = [
    { src: "/assets/icon12.svg", alt: "Facebook" },
    { src: "/assets/icon13.svg", alt: "Twitter" },
    { src: "/assets/icon14.svg", alt: "Instagram" },
    { src: "/assets/icon15.svg", alt: "LinkedIn" },
    { src: "/assets/icon16.svg", alt: "YouTube" }
  ];

  return (
    <div className="flex gap-4 pr-4 md:pr-10 lg:pr-20 mt-5">
      {socialIcons.map((icon, index) => (
        <img key={index} loading="lazy" src={icon.src} alt={icon.alt} className="shrink-0 w-6 aspect-square" />
      ))}
    </div>
  );
}

export default SocialLinks;