// Campus.jsx - Fully Responsive & Professional UI
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import {
  Coffee,
  Heart,
  Building2,
  BookOpen,
  Music,
  ArrowRight,
  Wifi,
  Shield,
  Zap,
  Trophy,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  CheckCircle,
  Award,
  Clock,
  Sparkles
} from "lucide-react";

const Campus = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const campusSections = [
    {
      id: "dining",
      title: "Food & Dining",
      icon: <Coffee size={40} />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      description: "Experience world-class dining with nutritious meals prepared by professional chefs.",
      details: [
        "Nutritious meals by professional chefs",
        "Hygienic certified kitchen",
        "Veg & non-veg options available",
        "Special diet accommodations",
        "Spacious dining halls",
        "24/7 clean drinking water"
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156163/ss_v6ujdt.png",
      stats: "3,000+ meals served daily",
      color: "orange"
    },
    {
      id: "health",
      title: "Health Facilities",
      icon: <Heart size={40} />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      description: "Round-the-clock healthcare support with qualified medical professionals.",
      details: [
        "24/7 medical center on campus",
        "Emergency ambulance service",
        "Regular health checkups",
        "Professional counseling support",
        "In-house pharmacy",
        "First-aid at all locations"
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156161/ss2_rw8w3s.png",
      stats: "24/7 medical availability",
      color: "red"
    },
    {
      id: "hostel",
      title: "Hostel Accommodation",
      icon: <Building2 size={40} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Safe, comfortable, and fully-furnished accommodation for all students.",
      details: [
        "Fully furnished rooms",
        "24/7 security & CCTV surveillance",
        "High-speed Wi-Fi internet",
        "Regular housekeeping services",
        "Laundry facilities available",
        "Common recreation areas"
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156162/ss3_ismcmg.png",
      stats: "5,000+ students accommodated",
      color: "blue"
    },
    {
      id: "library",
      title: "Central Library",
      icon: <BookOpen size={40} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Extensive learning resources to support your academic journey.",
      details: [
        "50,000+ books in collection",
        "Digital e-library access",
        "Modern computer labs",
        "Spacious study halls",
        "Research support services",
        "Periodicals & journals section"
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156506/ss5_ouzidj.svg",
      stats: "50,000+ books available",
      color: "green"
    },
    {
      id: "activities",
      title: "Campus Activities",
      icon: <Music size={40} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Vibrant campus life with cultural, sports, and recreational activities.",
      details: [
        "Annual cultural festivals",
        "Inter-college sports tournaments",
        "Student clubs & societies",
        "Technical seminars & workshops",
        "Talent shows & competitions",
        "Guest lectures by industry experts"
      ],
      image: "https://res.cloudinary.com/djtvxmttf/image/upload/v1776156758/ss6_yk7zbh.jpg",
      stats: "50+ events annually",
      color: "purple"
    },
  ];

  const quickFacts = [
    { icon: <Users className="w-6 h-6" />, value: "15,000+", label: "Students", color: "red" },
    { icon: <Trophy className="w-6 h-6" />, value: "50+", label: "Awards Won", color: "yellow" },
    { icon: <Clock className="w-6 h-6" />, value: "24/7", label: "Support Available", color: "green" },
    { icon: <Shield className="w-6 h-6" />, value: "100%", label: "Safe Campus", color: "blue" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: { bg: "bg-orange-50", hover: "hover:bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      red: { bg: "bg-red-50", hover: "hover:bg-red-100", text: "text-red-600", border: "border-red-200" },
      blue: { bg: "bg-blue-50", hover: "hover:bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      green: { bg: "bg-green-50", hover: "hover:bg-green-100", text: "text-green-600", border: "border-green-200" },
      purple: { bg: "bg-purple-50", hover: "hover:bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
    };
    return colors[color] || colors.red;
  };

  return (
    <Layout>
      {/* HERO SECTION - Enhanced */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Life at Campus</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5">
            Experience Complete
            <span className="block text-yellow-300">Student Life</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Discover a vibrant campus community where learning meets life, 
            and dreams take flight.
          </p>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            {quickFacts.map((fact, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-${fact.color}-100 flex items-center justify-center text-${fact.color}-600`}>
                  {fact.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{fact.value}</div>
                <div className="text-xs sm:text-sm text-gray-500">{fact.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Campus Facilities
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              World-class infrastructure and facilities designed for your holistic development
            </p>
          </div>

          {campusSections.map((section, index) => {
            const colorClasses = getColorClasses(section.color);
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={section.id}
                id={`section-${index}`}
                className="animate-on-scroll mb-20 sm:mb-24 md:mb-28 lg:mb-32 last:mb-0"
                style={{
                  opacity: isVisible[`section-${index}`] ? 1 : 0,
                  transform: isVisible[`section-${index}`] ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.6s ease-out"
                }}
              >
                <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 md:gap-12 items-center`}>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="mb-6">
                      <div className={`inline-flex items-center gap-3 ${colorClasses.bg} p-3 rounded-2xl mb-4`}>
                        <div className={colorClasses.text}>
                          {section.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                        {section.title}
                      </h3>
                      <div className={`w-16 h-1 ${colorClasses.text.replace('text', 'bg')} mb-4`}></div>
                      <p className="text-gray-600 text-base sm:text-lg mb-5">
                        {section.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {section.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className={`w-5 h-5 ${colorClasses.text} flex-shrink-0`} />
                          <span className="text-sm sm:text-base">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`inline-flex items-center gap-2 ${colorClasses.bg} ${colorClasses.text} px-3 py-1.5 rounded-full text-sm mb-5`}>
                      <Award className="w-4 h-4" />
                      <span>{section.stats}</span>
                    </div>

                    <Link
                      to="/admission"
                      className={`inline-flex items-center gap-2 ${colorClasses.text} border ${colorClasses.border} hover:${colorClasses.hover} px-5 py-2.5 rounded-lg font-medium transition-all duration-300 group`}
                    >
                      Explore More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Image Content */}
                  <div className="flex-1">
                    <div className="relative group">
                      <div className={`absolute -inset-1 ${colorClasses.text.replace('text', 'bg')} rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300`}></div>
                      <div className="relative overflow-hidden rounded-2xl shadow-xl">
                        <img
                          src={section.image}
                          alt={section.title}
                          className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose Sri Chaitanya?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              We provide the perfect environment for academic excellence and personal growth
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Trophy className="w-8 h-8" />, title: "Excellence Track Record", desc: "Consistent top results in JEE, NEET, and other competitive exams" },
              { icon: <Users className="w-8 h-8" />, title: "Expert Faculty", desc: "Highly qualified and experienced teaching staff" },
              { icon: <BookOpen className="w-8 h-8" />, title: "Smart Learning", desc: "Technology-enabled classrooms and digital resources" },
              { icon: <Heart className="w-8 h-8" />, title: "Student Support", desc: "Personalized mentoring and career guidance" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who chose Sri Chaitanya for their bright future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Campus;