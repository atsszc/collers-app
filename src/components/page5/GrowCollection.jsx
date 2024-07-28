import React from "react";
import SidebarItem from "./SidebarItem";
import MainImage from "./MainImage";

const sidebarItems = [
  { icon: "/assets/icon4.svg", text: "Bibendum tellus", active: true },
  { icon: "/assets/icon5.svg", text: "Cras eget" },
  { icon: "/assets/icon6.svg", text: "Dolor pharetra" },
  { icon: "/assets/icon7.svg", text: "Amet, fringilla" },
  { icon: "/assets/icon8.svg", text: "Amet nibh" },
  { icon: "/assets/icon9.svg", text: "Sed velit" }
];

function GrowCollection() {
  return (
    <section className="flex flex-col items-start pt-40 bg-[#FFFCF3] max-md:pt-20">
      <h1 className="text-[56px] pl-20 font-roboto font-extrabold leading-[61.6px] text-slate-900 max-md:pl-5 max-md:text-4xl">
        Grow your collection
      </h1>
      <p className="mt-8 font-roboto text-lg pl-20 leading-7 text-slate-900 max-md:pl-5 max-md:text-base max-md:mt-4">
        Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
        <br />
        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
      </p>
      <div className="flex relative flex-col items-center self-stretch px-16 pb-20 mt-20 w-full min-h-[684px] max-md:px-5 max-md:mt-10">
        <img loading="lazy" src="/assets/background2.png" alt="" className="object-cover absolute inset-0 w-full h-full" />
        <div className="relative mb-6 w-full max-w-screen-xl max-md:max-w-full">
          <div className="flex gap-[100px] max-md:flex-col">
            <nav className="flex flex-col w-[21%] max-md:w-full">
              <ul className="flex relative font-roboto text-nowrap flex-col text-xl font-medium tracking-wide leading-6 text-slate-900 max-md:mt-10">
                {sidebarItems.map((item, index) => (
                  <SidebarItem key={index} {...item} />
                ))}
              </ul>
            </nav>
            <MainImage />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GrowCollection;