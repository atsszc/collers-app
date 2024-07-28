import React from "react";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";

const productLinks = [
  { text: "Pricing" },
  { text: "Overview" },
  { text: "Browse" },
  { text: "Accessibility" },
  { text: "Five" },
];

const solutionsLinks = [
  { text: "Brainstorming" },
  { text: "Ideation" },
  { text: "Wireframing" },
  { text: "Research" },
  { text: "Design" },
];

const supportLinks = [
  { text: "Contact Us" },
  { text: "Developers" },
  { text: "Documentation" },
  { text: "Integrations" },
  { text: "Reports" },
];

function Footer() {
  return (
    <footer className="flex flex-col justify-center px-4 md:px-10 lg:px-20 bg-slate-900">
      <div className="py-12 border-t border-b border-slate-700">
        <div className="flex flex-wrap gap-5 lg:flex-nowrap">
          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Solutions" links={solutionsLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <div className="flex flex-col lg:ml-5 w-full lg:w-3/12">
            <div className="flex flex-col pt-3 mt-10 lg:mt-0">
              <h3 className="text-base font-medium leading-4 text-white">
                Get the App
              </h3>
              <div className="flex flex-col mt-6 space-y-4">
                <img
                  loading="lazy"
                  src="/assets/appstore.png"
                  alt="Download on the App Store"
                  className="max-w-full aspect-[3.03] w-[120px]"
                />
                <img
                  loading="lazy"
                  src="/assets/googleplay.png"
                  alt="Get it on Google Play"
                  className="max-w-full aspect-[3.33] w-[135px]"
                />
              </div>
              <h3 className="mt-20 text-base font-medium leading-4 text-slate-200 lg:mt-16">
                Follow Us
              </h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 py-6 text-base leading-6 text-slate-200">
        <div className="flex-1 my-auto">
          Collers @ 2023. All rights reserved.
        </div>
        <nav className="flex flex-wrap gap-5 items-start">
          <p href="#" className="py-3 cursor-pointer">Terms</p>
          <p href="#" className="py-3 cursor-pointer">Privacy</p>
          <p href="#" className="py-3 cursor-pointer">Contact</p>
          <div className="flex gap-2 self-stretch py-3">
            <img
              loading="lazy"
              src="/assets/icon11.svg"
              alt="Language icon"
              className="shrink-0 w-6 aspect-square"
            />
            <span>EN</span>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
