import React, { useState } from "react";
import TestimonialScreen from "./TestimonialScreen";
import NavigationButton from "./NavigationButton";

const TestimonialCard = () => {
  const [visibleIndex, setVisibleIndex] = useState(1);

  const testimonials = [
    {
      imageUrl: "/assets/person1.png",
      companyLogoUrl: "/assets/company1.png",
      companyName: "kontrastr",
      testimonial: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      authorName: "Ralph Edwards",
      authorTitle: "Product Designer",
    },
    {
      imageUrl: "/assets/person2.png",
      companyLogoUrl: "/assets/company2.png",
      companyName: "Zoomerr",
      testimonial: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      authorName: "Hellen Jummy",
      authorTitle: "Team Lead",
    },
    {
      imageUrl: "/assets/person3.png",
      companyLogoUrl: "/assets/company3.png",
      companyName: "SHELLS",
      testimonial: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      authorName: "Hellena John",
      authorTitle: "Co-founder",
    },
    {
      imageUrl: "/assets/person4.png",
      companyLogoUrl: "/assets/company4.png",
      companyName: "ArtVenue",
      testimonial: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      authorName: "David Oshodi",
      authorTitle: "Manager",
    },
    {
      imageUrl: "/assets/person5.png",
      companyLogoUrl: "/assets/company5.png",
      companyName: "WAVES",
      testimonial: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      authorName: "Charolette Hanlin",
      authorTitle: "CEO",
    },
  ];

  const handleNext = () => {
    if (visibleIndex < testimonials.length - 3) {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (visibleIndex > 0) {
      setVisibleIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="relative flex flex-col px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-20 bg-[#FFFCF3]">
      <div className="absolute top-[150px] sm:top-[200px] left-[20px] sm:left-[40px] w-[90%] sm:w-[1360px] h-[300px] sm:h-[421px] bg-[#FDE68A] z-0" />
      <header className="flex flex-col sm:flex-row justify-between items-center w-full mb-10 sm:mb-20 relative z-10">
        <h2 className="text-[32px] sm:text-[56px] font-['Roboto'] font-extrabold leading-[36px] sm:leading-[61.6px] text-slate-900">
          Because they love us
        </h2>
        <div className="flex gap-5 mt-5 sm:mt-0">
          <NavigationButton icon="/assets/buttonleft.svg" onClick={handlePrev} />
          <NavigationButton icon="/assets/buttonright.svg" onClick={handleNext} />
        </div>
      </header>
      <div className="relative overflow-hidden z-10">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${visibleIndex * 31}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[100%] sm:min-w-[50%] md:min-w-[31%] px-4 sm:px-6 md:px-12"
            >
              <TestimonialScreen
                imageUrl={testimonial.imageUrl}
                companyLogoUrl={testimonial.companyLogoUrl}
                companyName={testimonial.companyName}
                testimonial={testimonial.testimonial}
                authorName={testimonial.authorName}
                authorTitle={testimonial.authorTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
