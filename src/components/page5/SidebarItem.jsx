import React from "react";

function SidebarItem({ icon, text, active }) {
  return (
    <li className={`flex items-center p-4 mt-4 rounded-lg ${active ? "bg-white shadow-md" : ""}`}>
      <img loading="lazy" src={icon} alt="icon" className="shrink-0 w-6 h-6 max-md:w-5 max-sm:w-4 aspect-square" />
      <div className="flex-1 px-4 text-base max-md:text-sm max-sm:text-xs">{text}</div>
      {active && <img loading="lazy" src="/assets/icon10.svg" alt="active icon" className="shrink-0 w-6 h-6 max-md:w-5 max-sm:w-4 aspect-square" />}
    </li>
  );
}

export default SidebarItem;
