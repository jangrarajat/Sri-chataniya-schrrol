// Courses.jsx - Fully Responsive & Professional UI
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { 
  BookOpen, 
  Users, 
  Trophy, 
  Award, 
  ArrowRight, 
  CheckCircle,
  GraduationCap,
  Calendar,
  FileText,
  MessageCircle,
  Sparkles,
  Target,
  Clock,
  Star,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Courses = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const courses = [
    {
      id: "jee",
      title: "IIT-JEE (Main & Advanced)",
      icon: <Target size={48} />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      description: "Comprehensive preparation program for India's most prestigious engineering entrance exams.",
      features: [
        "Expert faculty with IIT background",
        "Weekly mock tests & performance analysis",
        "Comprehensive study material",
        "24/7 doubt clearing sessions",
        "Online & offline classes available",
        "Previous year paper discussion"
      ],
      duration: "2 Years Program",
      eligibility: "10th Pass / Appearing",
      examPattern: "JEE Main & Advanced",
      color: "blue"
    },
    {
      id: "neet",
      title: "NEET-UG",
      icon: <GraduationCap size={48} />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      description: "Focused preparation for medical entrance exam with comprehensive biology, physics, and chemistry coverage.",
      features: [
        "Highly qualified medical faculty",
        "Regular mock tests & practice papers",
        "Complete NCERT coverage",
        "Personalized mentoring",
        "Doubt resolution sessions",
        "Success oriented study plan"
      ],
      duration: "2 Years Program",
      eligibility: "10th Pass / Appearing",
      examPattern: "NEET-UG",
      color: "green"
    },
    {
      id: "foundation",
      title: "Foundation Course",
      icon: <Sparkles size={48} />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Early preparation program for class 8-10 students to build strong fundamentals for competitive exams.",
      features: [
        "Concept building approach",
        "Olympiad preparation",
        "Regular assessments",
        "Career guidance sessions",
        "Activity-based learning",
        "Personality development"
      ],
      duration: "1-3 Years Program",
      eligibility: "Class 8, 9, 10 Students",
      examPattern: "School + Olympiad",
      color: "purple"
    },
    {
      id: "crash",
      title: "Crash Course",
      icon: <Clock size={48} />,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      description: "Intensive short-term program for last-minute preparation and revision.",
      features: [
        "Focused revision modules",
        "Important topic coverage",
        "Mock test series",
        "Time management strategies",
        "Previous year analysis",
        "Quick doubt resolution"
      ],
      duration: "3-6 Months",
      eligibility: "11th / 12th Students",
      examPattern: "JEE / NEET",
      color: "orange"
    }
  ];

  const admissionSteps = [
    { step: "01", title: "Register Online", desc: "Fill the online application form with your details", icon: <FileText size={24} /> },
    { step: "02", title: "Entrance Test", desc: "Take our scholarship cum admission test", icon: <Target size={24} /> },
    { step: "03", title: "Counseling", desc: "Personal counseling session with experts", icon: <MessageCircle size={24} /> },
    { step: "04", title: "Admission", desc: "Complete the admission formalities", icon: <GraduationCap size={24} /> }
  ];

  const faqs = [
    {
      question: "What is the eligibility criteria for JEE/NEET courses?",
      answer: "Students who have passed or are appearing for 10th standard (or equivalent) are eligible for our 2-year integrated program. For 1-year program, students must be in 11th or 12th standard."
    },
    {
      question: "Is there any scholarship available?",
      answer: "Yes, we offer merit-based scholarships through our entrance test. Students scoring above 80% in the test can get up to 100% scholarship. We also offer special scholarships for economically weaker sections."
    },
    {
      question: "What is the batch size and teacher-student ratio?",
      answer: "We maintain small batch sizes of 40-50 students to ensure individual attention. Our teacher-student ratio is 1:15, ensuring every student gets proper guidance and support."
    },
    {
      question: "Do you provide hostel facilities?",
      answer: "Yes, we have separate boys and girls hostels with all modern amenities including Wi-Fi, 24/7 security, nutritious meals, and study rooms."
    },
    {
      question: "What is the admission process?",
      answer: "The admission process involves: 1) Online Registration, 2) Entrance Test, 3) Personal Interview/Counseling, 4) Fee Payment and Document Verification."
    },
    {
      question: "Are online classes available?",
      answer: "Yes, we offer both online and offline (hybrid) learning options. Students can choose according to their convenience. Recorded lectures are also available for revision."
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", hover: "hover:bg-blue-100", text: "text-blue-600", border: "border-blue-200", dark: "bg-blue-600" },
      green: { bg: "bg-green-50", hover: "hover:bg-green-100", text: "text-green-600", border: "border-green-200", dark: "bg-green-600" },
      purple: { bg: "bg-purple-50", hover: "hover:bg-purple-100", text: "text-purple-600", border: "border-purple-200", dark: "bg-purple-600" },
      orange: { bg: "bg-orange-50", hover: "hover:bg-orange-100", text: "text-orange-600", border: "border-orange-200", dark: "bg-orange-600" },
    };
    return colors[color] || colors.blue;
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Our Programs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-5">
            Courses Designed
            <span className="block text-yellow-300">For Your Success</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Choose from our range of comprehensive programs tailored to help you crack competitive exams
          </p>
        </div>
      </section>

      {/* COURSES GRID */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Comprehensive courses with proven track record of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {courses.map((course) => {
              const colorClasses = getColorClasses(course.color);
              
              return (
                <div
                  key={course.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1`}
                >
                  <div className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${colorClasses.bg} p-3 rounded-2xl`}>
                        <div className={colorClasses.text}>
                          {course.icon}
                        </div>
                      </div>
                      <div className={`${colorClasses.bg} ${colorClasses.text} px-3 py-1 rounded-full text-xs font-semibold`}>
                        {course.duration}
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4">
                      {course.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-5">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick Info */}
                    <div className="flex flex-wrap gap-3 mb-6 pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Calendar className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <GraduationCap className="w-3 h-3" />
                        <span>{course.eligibility}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/admission"
                      className={`inline-flex items-center gap-2 ${colorClasses.dark} text-white px-5 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all duration-300 group`}
                    >
                      Apply Now
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ADMISSION STEPS */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Admission Process
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-5"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              Simple and transparent admission process to get you started
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-yellow-400/30 -translate-y-1/2"></div>
                )}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl">
                    {step.step}
                  </div>
                  <div className="text-yellow-400 mb-2 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300"
            >
              Register Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mb-5"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              Find answers to common questions about our courses and admission
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "pb-4 max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dreams with Sri Chaitanya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admission"
              className="bg-white text-red-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Contact Counselor
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;