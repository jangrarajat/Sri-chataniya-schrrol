// Home.jsx - Fully Responsive
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Trophy,
  BookOpen,
  Zap,
  MessageCircle,
  ArrowRight,
  X,
} from "lucide-react";
import Layout from "../components/Layout";
import ImageSlide from "../components/ImageSlide";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showWelcomePopup, setShowWelcomePopup] = useState(true);

  const slides = [
    { url: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776101386/s2_zew2ia.png" },
    { url: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776101390/s5_zzymlf.jpg" },
    { url: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776101393/s34_jxvrls.jpg" },
    { url: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776101394/s3_avirgd.png" },
    { url: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776101396/s1_kia2wv.jpg" },
  ];

  const exploreCourses = [
    { name: "IIT (MAIN & ADVANCED)", img: "https://srichaitanya.net/wp-content/uploads/2023/01/c-profile-pic_.jpg" },
    { name: "NEET UG", img: "https://srichaitanya.net/wp-content/uploads/2023/01/neet-profile-pic.jpg" },
  ];

  const exprinceBar = [
    { top: "41 Years", botom: "of Excellence" },
    { top: "62000+", botom: "Staff" },
    { top: "950+", botom: "Branches" },
    { top: "22", botom: "States" },
    { top: "248+", botom: "Cities" },
    { top: "950000+", botom: "Students" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <Layout>
      {/* POPUP - Responsive */}
      {showWelcomePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-yellow-400 p-4 sm:p-6 md:p-8 rounded-xl text-center relative max-w-sm sm:max-w-md w-full mx-4">
            <button
              onClick={() => setShowWelcomePopup(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-red-700 mb-2">Welcome!</h2>
            <p className="mb-4 text-sm sm:text-base">Sri Chetanaya Educational Institutions</p>
            <button
              onClick={() => setShowWelcomePopup(false)}
              className="bg-red-700 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base hover:bg-red-800 transition"
            >
              Explore Now
            </button>
          </div>
        </div>
      )}

      {/* SLIDER - Responsive height */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <button 
          onClick={prevSlide} 
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 sm:p-2 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* STATS - Responsive logo strip */}
      <section className="py-6 sm:py-8 md:py-10 text-center flex items-center justify-center px-4">
        <div className="h-auto sm:h-32 w-full sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto bg-white flex flex-wrap items-center justify-center p-3 sm:p-5 shadow-2xl gap-3 sm:gap-4 md:gap-6 rounded-lg">
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/SRI-CHAITANYA-LOGO.png" alt="logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/SCHOOLS.png" alt="logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/FUTURE-PATHWAYS.png" alt="logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/IAS.png" alt="logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/INFINITY-LEARN.png" alt="logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
          <img src="https://srichaitanya.net/wp-content/uploads/2024/12/SC_academy.png" alt="logo" className="h-12 sm:h-16 md:h-20 w-auto object-contain" />
        </div>
      </section>

      {/* COURSES - Responsive grid */}
      <section className="py-8 sm:py-10 md:py-12 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold text-black mb-6 sm:mb-8">
          Explore Courses
        </h2>
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          {exploreCourses.map((cours, i) => (
            <div key={i} className="w-64 sm:w-56 md:w-60 lg:w-64 h-auto rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-12 flex items-center font-bold justify-center text-center bg-blue-900 text-white text-xs sm:text-sm px-2">
                {cours.name}
              </div>
              <div className="w-full">
                <img src={cours.img} alt={cours.name} className="w-full h-auto object-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS BAR - Responsive */}
      <section className="text-center py-6 sm:py-8 md:py-10 lg:py-14 bg-red-600 px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {exprinceBar.map((ex, i) => (
            <div key={i} className="flex items-center">
              <div>
                <p className="text-white text-center font-bold text-xl sm:text-2xl md:text-3xl">
                  {ex.top}
                </p>
                <p className="text-white text-center font-medium text-xs sm:text-sm">
                  {ex.botom}
                </p>
              </div>
              {i < exprinceBar.length - 1 && (
                <div className="hidden sm:block h-8 w-px bg-white/30 mx-2 sm:mx-3 md:mx-4"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION - Responsive flex column on mobile */}
      <section className=" py-6 sm:py-8">
        <div className="flex flex-col md:flex-row h-auto md:h-[450px] lg:h-[500px] w-full bg-orange-400  overflow-hidden">
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full">
            <img
              src="https://srichaitanya.net/wp-content/uploads/2023/01/srichaitnya.webp"
              alt="About Sri Chaitanya"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 h-auto md:h-full bg-blue-950 gap-3 sm:gap-4 items-start text-white p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">A Few Words About Sri Chaitanya</h1>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Sri Chaitanya College has come up with some innovative and world-class learning methodologies that would make the Indians rule the world. The futuristic vision of Dr. B.S. Rao and Dr. Jhansi Lakshmi Bhai always kept the students ahead of time. Their farsightedness, determination and leadership qualities have given India a World-Class education system.
            </p>
            <button className="bg-red-600 px-5 sm:px-6 md:px-7 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
              Know More <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* TWO COLUMN CARDS - Responsive */}
      <section className="px-4 py-4 sm:py-6">
        <div className="w-full flex flex-col md:flex-row ">
          <div
            className="w-full md:w-1/2 h-48 sm:h-52 md:h-56  p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 text-white items-start relative overflow-hidden"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dmpka6wxi/image/upload/v1776449957/we_y0ccu1.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-red-900/75"></div>
            <div className="relative z-10">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Question Paper, Key & Solutions</h1>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2">Download JEE Main, Advanced and NEET Question Paper and Solutions here.</p>
              <button className="bg-yellow-500 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 mt-3 sm:mt-4 rounded-lg hover:bg-yellow-600 transition text-sm">
                KNOW MORE <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          <div
            className="w-full md:w-1/2 h-48 sm:h-52 md:h-56  p-4 sm:p-5 flex flex-col gap-2 sm:gap-3 text-white items-start relative overflow-hidden"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dmpka6wxi/image/upload/v1776450127/er_tb15ue.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-blue-600/80"></div>
            <div className="relative z-10">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl">Rank Predictor</h1>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2">Predict your JEE/NEET Percentile and Expected All India Rank.</p>
              <button className="bg-yellow-500 px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 mt-3 sm:mt-4 rounded-lg hover:bg-yellow-600 transition text-sm">
                KNOW MORE <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE SLIDE SECTION */}
      <section className="my-6 sm:my-8 md:my-10">
        <ImageSlide />
      </section>

      {/* TESTIMONIAL SLIDER SECTION */}
      <section className="my-6 sm:my-8 md:my-10">
        <TestimonialSlider />
      </section>
    </Layout>
  );
};

export default Home;