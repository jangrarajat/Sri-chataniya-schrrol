// About.jsx - Fully Responsive & Professional UI
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { 
  Heart, 
  Eye, 
  Target, 
  Sparkles,
  Users,
  Trophy,
  BookOpen,
  Award,
  ChevronRight,
  Quote,
  Star,
  Calendar,
  MapPin,
  Mail,
  Phone,
  TrendingUp,
  GraduationCap,
  Building2
} from "lucide-react";

const About = () => {
  const [counter, setCounter] = useState({
    years: 0,
    students: 0,
    faculty: 0,
    results: 0
  });

  const achievements = [
    { label: "Years of Excellence", value: 41, icon: <Calendar size={28} />, suffix: "+", color: "blue" },
    { label: "Students Trained", value: 950000, icon: <Users size={28} />, suffix: "+", color: "green" },
    { label: "Expert Faculty", value: 62000, icon: <GraduationCap size={28} />, suffix: "+", color: "purple" },
    { label: "Success Rate", value: 95, icon: <Trophy size={28} />, suffix: "%", color: "orange" }
  ];

  const values = [
    {
      icon: <Eye size={36} />,
      title: "Our Vision",
      description: "To be a globally recognized institution that transforms students into future leaders and innovators.",
      color: "blue"
    },
    {
      icon: <Target size={36} />,
      title: "Our Mission",
      description: "To provide quality education, foster critical thinking, and develop responsible global citizens.",
      color: "green"
    },
    {
      icon: <Heart size={36} />,
      title: "Our Values",
      description: "Integrity, Excellence, Innovation, and Student-centric approach in everything we do.",
      color: "red"
    }
  ];

  const faculty = [
    { name: "Dr. Sushma Boppana", role: "CEO & Academic Director", qualification: "Ph.D. in Education", experience: "25+ years", image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Prof. Rajesh Kumar", role: "Head of Academics", qualification: "M.Tech from IIT Delhi", experience: "20+ years", image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Dr. Priya Sharma", role: "Senior Faculty - Physics", qualification: "Ph.D. in Physics", experience: "18+ years", image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Prof. Amit Verma", role: "Senior Faculty - Mathematics", qualification: "M.Sc from IIT Kanpur", experience: "15+ years", image: "https://randomuser.me/api/portraits/men/45.jpg" }
  ];

  useEffect(() => {
    const duration = 2000;
    const stepTime = 20;
    
    const animateValue = (start, end, setter) => {
      const steps = duration / stepTime;
      const increment = end / steps;
      let current = start;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setter(end);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, stepTime);
      
      return timer;
    };
    
    const timers = [
      animateValue(0, 41, (val) => setCounter(prev => ({ ...prev, years: val }))),
      animateValue(0, 950, (val) => setCounter(prev => ({ ...prev, students: val }))),
      animateValue(0, 620, (val) => setCounter(prev => ({ ...prev, faculty: val }))),
      animateValue(0, 95, (val) => setCounter(prev => ({ ...prev, results: val })))
    ];
    
    return () => timers.forEach(timer => timer && clearInterval(timer));
  }, []);

  const getColorStyles = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", dark: "bg-blue-600", light: "bg-blue-100" },
      green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", dark: "bg-green-600", light: "bg-green-100" },
      red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", dark: "bg-red-600", light: "bg-red-100" },
      purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", dark: "bg-purple-600", light: "bg-purple-100" },
      orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", dark: "bg-orange-600", light: "bg-orange-100" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Legacy of Excellence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5">
            About Sri Chaitanya
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Building Excellence, Shaping Futures Since 1985
          </p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm mb-4">
                <Heart size={14} />
                <span>Our Journey</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-5">
                Empowering Dreams Since <span className="text-red-600">1985</span>
              </h2>
              <div className="w-20 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-600 text-base sm:text-lg mb-4 leading-relaxed">
                Sri Chaitanya Educational Institutions was founded with a revolutionary vision to provide world-class education that transforms students into future leaders. Our journey began with a single goal: to make quality education accessible to every aspiring student.
              </p>
              <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
                Today, we stand as one of India's premier educational institutions, having nurtured over 9.5 lakh students who have excelled in competitive exams like JEE, NEET, and beyond. Our commitment to excellence and innovation continues to drive us forward.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Trophy size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">5000+</p>
                    <p className="text-xs text-gray-500">Rank Holders</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building2 size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">950+</p>
                    <p className="text-xs text-gray-500">Branches</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">22+</p>
                    <p className="text-xs text-gray-500">States</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=600&fit=crop"
                  alt="Sri Chaitanya Campus"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-4 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <TrendingUp size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Success Rate</p>
                    <p className="text-xl font-bold text-gray-800">95%+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS COUNTER SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              These numbers reflect our commitment to excellence and student success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, idx) => {
              const colorStyles = getColorStyles(item.color);
              let displayValue = item.value;
              if (item.label === "Students Trained") displayValue = counter.students;
              else if (item.label === "Expert Faculty") displayValue = counter.faculty;
              else if (item.label === "Success Rate") displayValue = counter.results;
              else displayValue = counter.years;
              
              return (
                <div key={idx} className="text-center group">
                  <div className={`w-20 h-20 mx-auto mb-4 ${colorStyles.bg} rounded-2xl flex items-center justify-center ${colorStyles.text} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold mb-1">
                    {displayValue.toLocaleString()}{item.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VISION, MISSION, VALUES SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Guiding Principles
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              The core values that drive us towards excellence every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, idx) => {
              const colorStyles = getColorStyles(item.color);
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`${colorStyles.bg} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 ${colorStyles.text}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${colorStyles.text}`}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <Quote size={80} className="absolute text-red-200 opacity-50 -top-4 -left-4" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-600 shadow-lg">
                    <img 
                      src="https://randomuser.me/api/portraits/women/68.jpg" 
                      alt="Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-gray-600 italic text-base sm:text-lg mb-4">
                    "Our mission is to empower every student with the knowledge, skills, and confidence to achieve their dreams. We believe in nurturing not just academic excellence but also character and values that last a lifetime."
                  </p>
                  <h4 className="font-bold text-xl text-gray-800">Dr. B.S. Rao & Dr. Jhansi Lakshmi Bhai</h4>
                  <p className="text-red-600">Founders, Sri Chaitanya Educational Institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FACULTY SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Expert Faculty
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Learn from the best educators who are dedicated to your success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800">{member.name}</h3>
                  <p className="text-red-600 text-sm font-medium mb-2">{member.role}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <GraduationCap size={12} />
                    <span>{member.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <Star size={12} />
                    <span>{member.experience} experience</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-700 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose Sri Chaitanya?
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5"></div>
            <p className="text-red-100 max-w-2xl mx-auto text-base sm:text-lg">
              What makes us the preferred choice for thousands of students
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Trophy size={32} />, title: "Proven Track Record", desc: "Consistent top results in JEE, NEET, and other competitive exams" },
              { icon: <BookOpen size={32} />, title: "Comprehensive Curriculum", desc: "Well-researched study material and regular assessments" },
              { icon: <Users size={32} />, title: "Expert Faculty", desc: "Highly qualified teachers with years of experience" },
              { icon: <Heart size={32} />, title: "Student Support", desc: "24/7 doubt clearing and personalized mentoring" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400/20 rounded-full flex items-center justify-center text-yellow-400">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-red-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Take the first step towards a successful career with Sri Chaitanya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ChevronRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-gray-100 text-gray-800 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;