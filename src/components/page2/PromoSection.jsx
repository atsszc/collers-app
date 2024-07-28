import React from "react";
import SignUpButton from "./SignUpButton";
import ProductCard from "./ProductCard";
import DecorativeSquares from "./DecorativeSquares";

const cards = [
  {
    title: "Title",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    buttonText: "Buy Now",
    imageSrc: "/assets/ayakkabi1.png",
  },
  {
    title: "Title",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    buttonText: "Buy Now",
    imageSrc: "/assets/ayakkabi2.png",
  },
  {
    title: "Title",
    description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
    buttonText: "Buy Now",
    imageSrc: "/assets/ayakkabi5.png",
  },
];

const PromoSection = () => (
  <section className="relative flex flex-col justify-center p-10 md:p-20 border-t border-b bg-slate-900 border-slate-200">
    <DecorativeSquares />
    <header className="relative z-10 flex flex-col md:flex-row gap-5 text-white flex-wrap items-center">
      <h1 className="flex-1 text-4xl font-roboto md:text-5xl font-extrabold leading-tight">
        The best of the best
      </h1>
      <SignUpButton />
    </header>
    <div className="relative z-10 flex flex-wrap gap-6 md:gap-12 pt-10 md:pt-20">
      {cards.map((card, index) => (
        <ProductCard
          key={index}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          imageSrc={card.imageSrc}
        />
      ))}
    </div>
  </section>
);

export default PromoSection;
