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
} from "lucide-react";
import Layout from "../components/Layout";

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
    { name: "IIT(MAIN&ADVANCED)", img: "https://srichaitanya.net/wp-content/uploads/2023/01/c-profile-pic_.jpg" },
    { name: "NEET UG", img: "https://srichaitanya.net/wp-content/uploads/2023/01/neet-profile-pic.jpg" },
    // { name: "UPSC SERVICES", img: "https://srichaitanya.net/wp-content/uploads/2023/01/civil-profile-pic.webp" },
    // { name: "INTERMEDIATE PUBLICE EXAM", img: "https://srichaitanya.net/wp-content/uploads/2023/01/c-profile-pic.webp" },
    // { name: " SRI CHAITANYA ACADEMY", img: "https://srichaitanya.net/wp-content/uploads/2023/01/c-profile-pic_3.jpg" },

  ]

  const exprinceBar = [
    { top: "41 Years", botom: "of Excellence" },
    { top: "62000+", botom: "Staff" },
    { top: "950+", botom: "Branches" },
    { top: "22", botom: "States" },
    { top: "248+", botom: "Cities" },
    { top: "950000", botom: "Students" },
  ]

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

      {/* POPUP */}
      {showWelcomePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-yellow-400 p-6 rounded-xl text-center relative">
            <button
              onClick={() => setShowWelcomePopup(false)}
              className="absolute top-2 right-2"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-red-700 mb-2">Welcome!</h2>
            <p className="mb-4">Sri Chetanaya Educational Institutions</p>
            <button
              onClick={() => setShowWelcomePopup(false)}
              className="bg-red-700 text-white px-4 py-2 rounded"
            >
              Explore Now
            </button>
          </div>
        </div>
      )}

      {/* SLIDER */}
      <div className="relative h-[550px] overflow-hidden  ">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.url}
            className={`absolute w-full h-full object-cover  ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        <button onClick={prevSlide} className="absolute left-4 top-1/2">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2">
          <ChevronRight />
        </button>
      </div>

      {/* STATS */}
      <section className=" py-10 text-center flex items-center justify-center">
        <div className=" h-32 w-[80%] mx-auto absolute bg-white flex items-center p-5 shadow-2xl justify-evenly">
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/SRI-CHAITANYA-LOGO.png" alt="logo" className=" h-20 w-30" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/SCHOOLS.png" alt="logo" className=" h-20 w-30" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/FUTURE-PATHWAYS.png" alt="logo" className=" h-20 w-30" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/IAS.png" alt="logo" className=" h-20 w-30" />
          <img src="https://srichaitanya.net/wp-content/uploads/2023/01/INFINITY-LEARN.png" alt="logo" className=" h-20 w-30" />
          <img src="https://srichaitanya.net/wp-content/uploads/2024/12/SC_academy.png" alt="logo" className=" h-20 w-30" />

        </div>
      </section>

      {/* COURSES */}
      <section className="py-10  h-fit ">
        <h2 className="text-5xl text-center font-extrabold text-black mb-6">Explore Courses</h2>
        <div className=" w-full min-h-10  flex flex-row gap-3 items-center  justify-center">
          {
            exploreCourses.map((cours, i) => (
              <div key={i} className=" w-52 h-72  ">
                <div className=" w-full h-[15%]  flex items-center  font-bold justify-center text-center bg-blue-900 text-white text-xs ">{cours.name}</div>
                <div className=" w-full h-[85%] ">
                  <img src={cours.img} alt="couse img" />

                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="text-center py-14 bg-red-600 mt-5 flex p-5 justify-center items-center gap-4">

        {
          exprinceBar.map((ex, i) => (


            <div key={i} className=" flex items-center">
              <div className=" " >
                <p className=" text-white text-center font-bold text-3xl" >{ex.top}</p>
                <p className=" text-white text-center font-bold" >{ex.botom}</p>
              </div>
              <div className="h-full">
                <hr className=" rotate-90 w-20" />
              </div>
            </div>


          ))
        }
      </section>

      <section>
        <div className=" flex h-[500px] w-full bg-orange-400 my-5">
          <div className=" w-[50%] h-full bg-orange-400">
            <img src="https://srichaitanya.net/wp-content/uploads/2023/01/srichaitnya.webp" alt="img"
              className=" w-full h-full"
            />
          </div>
          <div className=" w-[50%] h-full bg-blue-950 gap-4 items-start text-white p-10 flex flex-col">
            <h1 className=" font-bold text-3xl">A Few Words About Sri Chaitanya</h1>
            <p>
              Sri Chaitanya College has come up with some innovative and world-class learning methodologies that would make the Indians rules the world. The futuristic vision of Dr. B.S. Rao and Dr. Jhansi Lakshmi Bhai always kept the students ahead of time. Their farsightedness, determination and leadership qualities have given India a World-Class education system. Today india is all set to produce World-class engineers, technologists, doctors, scientists and management gurus without sending them abroad for grooming. The grooming that one undergoes at institutions in UK, USA is now available in India, right here.
            </p>
            <button className=" bg-red-600 px-7 py-3 flex items-center gap-2">
              Know More <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section id="5" >
        <div className=" w-full h-52  flex justify-center ">
          <div className="h-full w-[40%] p-5 flex flex-col gap-4 text-white items-start relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dmpka6wxi/image/upload/v1776450127/er_tb15ue.png')" }}
          >
            {/* Light red overlay - image upar dikhega but red tint bhi */}
            <div className="absolute inset-0 bg-red-900/85 mix-blend-multiply"></div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="font-bold text-3xl">Question Paper, Key & Solutions</h1>
              <p className="mt-2">Download JEE Main, Advanced and NEET Question Paper and Solutions here.</p>
              <button className="bg-yellow-500 px-4 py-3 flex items-center gap-2 mt-4 rounded-lg hover:bg-yellow-600 transition">
                KNOW MORE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="h-full w-[40%] p-5 flex flex-col gap-4 text-white items-start relative bg-cover bg-center"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dmpka6wxi/image/upload/v1776450127/er_tb15ue.png')" }}
          >
            {/* Light red overlay - image upar dikhega but red tint bhi */}
            <div className="absolute inset-0 bg-blue-600/85 mix-blend-multiply"></div>

            {/* Content */}
            <div className="relative z-10">
              <h1 className="font-bold text-3xl">Rank Predictor</h1>
              <p className="mt-2">Predict your JEE/NEET Percentile and Expected JEE/NEET All India Rank from your Overall Percentile secured.</p>
              <button className="bg-yellow-500 px-4 py-3 flex items-center gap-2 mt-4 rounded-lg hover:bg-yellow-600 transition">
                KNOW MORE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-10 bg-red-600 mt-5">
        <Link to="/apply" className="bg-red-700 text-white px-6 py-3 rounded">
          Apply Now
        </Link>
      </section>



      {/* WHATSAPP */}
      <a
        href="https://wa.me/918000123456"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full text-white"
      >
        <MessageCircle />
      </a>

    </Layout>
  );
};

export default Home;