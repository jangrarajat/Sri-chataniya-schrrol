// ImageSlide.jsx - Fully Responsive with 2 images visible
import React, { useState } from 'react';

const ImageSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images - replace with your actual image URLs
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      title: "JEE Main 2026 Session 2",
      subtitle: "Paper Solution & Answer Key",
      badge: "Important Updates"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
      title: "Most Inspirational Leaders",
      subtitle: "Education Industry Awards 2026",
      badge: "Awards"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
      title: "Video Solutions Available",
      subtitle: "2nd to 8th April, 2023",
      badge: "New Release"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop",
      title: "Expert Faculty Sessions",
      subtitle: "Detailed Explanations Available",
      badge: "Live Now"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
      title: "Mock Test Series",
      subtitle: "Practice for JEE Main 2026",
      badge: "New"
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleSlides = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    
    return {
      prev: slides[prevIndex],
      current: slides[currentIndex],
      next: slides[nextIndex]
    };
  };

  const { prev, current, next } = getVisibleSlides();

  return (
    <div className="relative w-full max-w-7xl mx-auto px-3 sm:px-4">
      {/* Title */}
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">Latest Blog</h2>
        <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">Know something more from our latest blog!</p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Slides Wrapper - 3 slides visible on desktop, 1 on mobile */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          
          {/* Previous Slide - Hidden on mobile, visible on tablet/desktop */}
          <div className="hidden md:block w-1/3 lg:w-1/4 opacity-60 transition-all duration-500">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="relative h-32 sm:h-40 md:h-44 lg:h-48">
                <img
                  src={prev.image}
                  alt={prev.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-2 sm:p-3">
                <span className="inline-block px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-blue-600 text-white rounded-full">
                  {prev.badge}
                </span>
                <h3 className="text-xs sm:text-sm font-bold mt-1.5 sm:mt-2 text-gray-800 line-clamp-1">{prev.title}</h3>
              </div>
            </div>
          </div>

          {/* Current Slide (center - highlighted) - Full width on mobile */}
          <div className="w-full md:w-1/2 transition-all duration-500 z-10 px-0 sm:px-0 md:px-0">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-white transform hover:scale-[1.01] md:hover:scale-[1.02] transition-transform duration-300">
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6 text-white">
                  <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold bg-blue-600 rounded-full mb-1.5 sm:mb-2 md:mb-3">
                    {current.badge}
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-0.5 sm:mb-1 md:mb-2">
                    {current.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-200 line-clamp-2 sm:line-clamp-none">
                    {current.subtitle}
                  </p>
                  <button className="mt-2 sm:mt-3 md:mt-4 px-3 sm:px-4 md:px-5 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm font-medium bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Next Slide - Hidden on mobile, visible on tablet/desktop */}
          <div className="hidden md:block w-1/3 lg:w-1/4 opacity-60 transition-all duration-500">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="relative h-32 sm:h-40 md:h-44 lg:h-48">
                <img
                  src={next.image}
                  alt={next.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
              <div className="p-2 sm:p-3">
                <span className="inline-block px-1.5 sm:px-2 py-0.5 text-[10px] sm:text-xs font-semibold bg-blue-600 text-white rounded-full">
                  {next.badge}
                </span>
                <h3 className="text-xs sm:text-sm font-bold mt-1.5 sm:mt-2 text-gray-800 line-clamp-1">{next.title}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons - Responsive sizing */}
        <button
          onClick={goToPrevious}
          className="absolute -left-2 sm:-left-3 md:left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute -right-2 sm:-right-3 md:right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-20"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation - Responsive */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index
                ? "w-5 sm:w-6 md:w-8 h-1.5 sm:h-2 bg-blue-600"
                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter - Responsive */}
      <div className="text-center mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500">
        {currentIndex + 1} / {slides.length}
      </div>
    </div>
  );
};

export default ImageSlide;