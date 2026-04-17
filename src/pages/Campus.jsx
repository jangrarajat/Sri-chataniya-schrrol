import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Coffee,
  Heart,
  Building2,
  BookOpen,
  Music,
  ArrowRight,
} from "lucide-react";

const Campus = () => {
  const campusSections = [
    {
      id: "dining",
      title: "Food & Dining",
      icon: <Coffee size={40} />,
      description: "Experience our world-class dining facility",
      details: [
        "Nutritious meals by professional chefs",
        "Hygienic certified kitchen",
        "Veg & non-veg options",
        "Special diet available",
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156163/ss_v6ujdt.png",
    },
    {
      id: "health",
      title: "Health Facilities",
      icon: <Heart size={40} />,
      description: "24/7 healthcare support",
      details: [
        "Medical center",
        "Emergency services",
        "Health checkups",
        "Counseling support",
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156161/ss2_rw8w3s.png",
    },
    {
      id: "hostel",
      title: "Hostel",
      icon: <Building2 size={40} />,
      description: "Safe and comfortable stay",
      details: [
        "Furnished rooms",
        "24/7 security",
        "Internet access",
        "Laundry services",
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156162/ss3_ismcmg.png",
    },
    {
      id: "library",
      title: "Library",
      icon: <BookOpen size={40} />,
      description: "Learning resources",
      details: [
        "Books & e-library",
        "Computer lab",
        "Study halls",
        "Research support",
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156506/ss5_ouzidj.svg",
    },
    {
      id: "activities",
      title: "Activities",
      icon: <Music size={40} />,
      description: "Fun & culture",
      details: [
        "Festivals",
        "Sports",
        "Clubs",
        "Seminars",
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156758/ss6_yk7zbh.jpg",
    },
  ];

  return (
    <Layout>

      {/* HERO */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
        <h1 className="text-5xl font-bold">Life at Campus</h1>
        <p className="text-lg mt-2">
          Experience a complete student life 🎓
        </p>
      </section>

      {/* SECTIONS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 space-y-16">

          {campusSections.map((section, index) => (
            <div
              key={section.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* TEXT */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-yellow-300 p-3 rounded text-red-600">
                    {section.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-red-600">
                    {section.title}
                  </h2>
                </div>

                <p className="text-gray-600 mb-4">
                  {section.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {section.details.map((d, i) => (
                    <li key={i} className="text-gray-700">
                      ✔ {d}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="bg-red-600 text-white px-5 py-2 rounded inline-flex items-center gap-2"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>

              {/* IMAGE */}
              <div>
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg shadow-lg w-full h-72 object-cover"
                />
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-yellow-300 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Join Our Campus 🚀
        </h2>
        <Link
          to="/admission"
          className="bg-red-600 text-white px-6 py-3 rounded"
        >
          Apply Now
        </Link>
      </section>

    </Layout>
  );
};

export default Campus;