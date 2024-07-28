import React from 'react';

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col w-full lg:w-3/12">
      <div className="flex flex-col py-3 text-base leading-6 text-slate-200 mt-10 lg:mt-0">
        <h2 className="font-medium text-white leading-[110%]">{title}</h2>
        {links.map((link, index) => (
          <a key={index} href={link.href} className="mt-6 hover:underline">
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FooterColumn;