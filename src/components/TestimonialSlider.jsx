// TestimonialSlider.jsx - Fully Responsive
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ajay Reddy",
    exam: "JEE Main 2025*",
    text: "My brother studies in IIT Kharagpur, I was inspired by him. The guidance and study material provided here are exceptional. I was able to crack JEE Main with a great rank.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Devdutta Majhi",
    exam: "JEE Main 2025*",
    text: "AITS was a game-changer for me. The curated test papers helped me understand my weak areas. The faculty support was amazing throughout my preparation journey.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Raghav Sharma",
    exam: "JEE Advanced 2024*",
    text: "The faculty provided invaluable support and resolved my doubts instantly. The study material and regular mock tests helped me achieve my dream of getting into IIT.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Priya Patel",
    exam: "NEET 2025*",
    text: "The best decision I ever made was joining this institution. The teachers are highly knowledgeable and always available to help. I secured AIR 156 in NEET!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TestimonialSlider = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // For mobile: show only active testimonial
  // For desktop: show all 3 with scaling effect
  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[active]];
    }
    
    const prev = active === 0 ? testimonials.length - 1 : active - 1;
    const next = active === testimonials.length - 1 ? 0 : active + 1;
    return [testimonials[prev], testimonials[active], testimonials[next]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="bg-gray-100 py-10 sm:py-12 md:py-16 text-center px-4">
      {/* TITLE */}
      <p className="text-red-500 uppercase tracking-widest text-xs sm:text-sm mb-2">
        Testimonials
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
        Students Testimonials
      </h2>

      {/* SLIDER */}
      <div className="flex justify-center gap-3 sm:gap-4 md:gap-6 px-2 sm:px-4 flex-wrap md:flex-nowrap">
        {visibleTestimonials.map((t, idx) => {
          const isActive = !isMobile && idx === 1;
          
          return (
            <div
              key={idx}
              className={`w-full sm:w-[300px] md:w-[320px] lg:w-[360px] p-4 sm:p-5 md:p-6 rounded-xl shadow-lg transition-all duration-500 ${
                isActive
                  ? "bg-[#142850] text-white scale-100 md:scale-105"
                  : "bg-white text-gray-700"
              } ${isMobile ? "mx-auto" : ""}`}
            >
              {/* IMAGE */}
              <div className="flex justify-center -mt-8 sm:-mt-10 md:-mt-12 mb-3 sm:mb-4">
                <div className="bg-yellow-400 p-1 rounded-full">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full border-4 border-white object-cover"
                  />
                </div>
              </div>

              {/* STARS */}
              <div className="flex justify-center mb-3 sm:mb-4 text-yellow-500 text-sm sm:text-base">
                {"★".repeat(5)}
              </div>

              {/* TEXT */}
              <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 md:mb-6 line-clamp-4 sm:line-clamp-3">
                "{t.text}"
              </p>

              {/* NAME */}
              <h3 className="font-bold text-base sm:text-lg">
                {t.name}{" "}
                <span className="text-red-500 text-xs sm:text-sm">
                  {t.exam}
                </span>
              </h3>
            </div>
          );
        })}
      </div>

      {/* DOTS - Only show on mobile since desktop shows all */}
      {isMobile && (
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "bg-red-500 w-5 sm:w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* Desktop Navigation Dots */}
      {!isMobile && (
        <div className="flex justify-center mt-6 sm:mt-8 md:mt-10 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                active === i ? "bg-red-500 w-5 sm:w-6" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialSlider;