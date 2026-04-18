// FeeStructureDropdown.jsx - Fully Responsive & Professional UI
import React, { useState } from "react";
import { 
  X, 
  GraduationCap, 
  Calendar, 
  Clock, 
  IndianRupee,
  BookOpen,
  Target,
  Sparkles,
  ChevronRight,
  AlertCircle
} from "lucide-react";

const FeeStructureDropdown = ({ onClose }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  const feeStructure = [
    {
      id: "jee",
      category: "JEE COURSE (Main & Advanced)",
      icon: <Target size={24} />,
      color: "blue",
      courses: [
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "2 Year",
          fee: "₹ 3,20,000/-",
          startDate: "26-Mar & 2-Apr",
          features: ["Complete syllabus coverage", "Weekly tests", "Doubt sessions"]
        },
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "1 Year",
          fee: "₹ 1,75,000/-",
          startDate: "26-Mar & 2-Apr",
          features: ["Intensive preparation", "Mock tests", "Study material"]
        },
        {
          class: "Class Hindi/English (11th to 12th moving student)",
          duration: "1 Year",
          fee: "₹ 1,75,000/-",
          startDate: "19-Mar & 26-Mar",
          features: ["Revision focus", "Problem solving", "Previous year papers"]
        },
        {
          class: "Dropper Hindi/English (12th pass)",
          duration: "1 Year",
          fee: "₹ 1,60,000/-",
          startDate: "09-Apr & 17-Apr",
          features: ["Crash course", "Full length tests", "Personal mentoring"]
        },
      ],
    },
    {
      id: "neet",
      category: "NEET COURSE",
      icon: <GraduationCap size={24} />,
      color: "green",
      courses: [
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "2 Year",
          fee: "₹ 2,80,000/-",
          startDate: "26-Mar & 2-Apr",
          features: ["Complete Biology focus", "NCERT coverage", "Regular assessments"]
        },
        {
          class: "Class Hindi/English (10th to 11th moving student)",
          duration: "1 Year",
          fee: "₹ 1,51,000/-",
          startDate: "26-Mar",
          features: ["Targeted preparation", "Mock tests", "Doubt clearing"]
        },
        {
          class: "Class Hindi/English (11th to 12th moving student)",
          duration: "1 Year",
          fee: "₹ 1,56,000/-",
          startDate: "19-Mar & 26-Mar",
          features: ["Revision program", "Practice sessions", "Expert guidance"]
        },
        {
          class: "Dropper Hindi/English (12th pass)",
          duration: "1 Year",
          fee: "₹ 1,40,000/-",
          startDate: "09-Apr & 17-Apr",
          features: ["Intensive revision", "Full syllabus tests", "Performance analysis"]
        },
      ],
    },
    {
      id: "foundation",
      category: "FOUNDATION COURSE (Olympiads & Boards)",
      icon: <BookOpen size={24} />,
      color: "purple",
      courses: [
        { 
          class: "7th Class", 
          duration: "1 Year", 
          fee: "₹ 57,000/-", 
          startDate: "26-Mar & 2-Apr",
          features: ["Concept building", "Olympiad prep", "Activity based"]
        },
        { 
          class: "8th Class", 
          duration: "1 Year", 
          fee: "₹ 61,000/-", 
          startDate: "26-Mar & 2-Apr",
          features: ["Foundation strong", "Competitive edge", "Regular tests"]
        },
        { 
          class: "9th Class", 
          duration: "1 Year", 
          fee: "₹ 75,000/-", 
          startDate: "26-Mar & 2-Apr",
          features: ["Advanced concepts", "Problem solving", "Career guidance"]
        },
        { 
          class: "10th Class", 
          duration: "1 Year", 
          fee: "₹ 78,000/-", 
          startDate: "26-Mar & 2-Apr",
          features: ["Board preparation", "Olympiad training", "Mock exams"]
        },
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { 
        bg: "bg-blue-50", 
        hover: "hover:bg-blue-100", 
        text: "text-blue-600", 
        border: "border-blue-200",
        dark: "bg-blue-600",
        light: "bg-blue-100"
      },
      green: { 
        bg: "bg-green-50", 
        hover: "hover:bg-green-100", 
        text: "text-green-600", 
        border: "border-green-200",
        dark: "bg-green-600",
        light: "bg-green-100"
      },
      purple: { 
        bg: "bg-purple-50", 
        hover: "hover:bg-purple-100", 
        text: "text-purple-600", 
        border: "border-purple-200",
        dark: "bg-purple-600",
        light: "bg-purple-100"
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gradient-to-r from-red-700 via-red-600 to-orange-600 text-white px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <IndianRupee size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold">Fee Structure 2025-26</h2>
              <p className="text-red-100 text-sm">Choose the right course for your future</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex border-b border-gray-200 overflow-x-auto px-4 bg-gray-50">
          {feeStructure.map((section, idx) => {
            const colorClasses = getColorClasses(section.color);
            return (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 font-medium transition-all whitespace-nowrap border-b-2 ${
                  activeCategory === idx
                    ? `${colorClasses.text} border-red-600`
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                <span className={activeCategory === idx ? colorClasses.text : "text-gray-400"}>
                  {section.icon}
                </span>
                <span className="text-sm sm:text-base">{section.category}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {feeStructure.map((section, idx) => {
            const colorClasses = getColorClasses(section.color);
            return (
              <div key={idx} className={activeCategory === idx ? "block" : "hidden"}>
                {/* Category Header */}
                <div className={`${colorClasses.bg} rounded-xl p-4 mb-6 flex items-center justify-between flex-wrap gap-3`}>
                  <div className="flex items-center gap-3">
                    <div className={`${colorClasses.light} p-2 rounded-lg ${colorClasses.text}`}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${colorClasses.text}`}>
                        {section.category}
                      </h3>
                      <p className="text-gray-600 text-sm">Select your batch and start date</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-gray-600">Limited seats available</span>
                  </div>
                </div>

                {/* Course Cards Grid */}
                <div className="grid md:grid-cols-2 gap-5">
                  {section.courses.map((course, i) => (
                    <div
                      key={i}
                      className={`border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                        i % 2 === 0 ? "border-gray-200" : "border-gray-200"
                      }`}
                    >
                      {/* Course Header */}
                      <div className={`${colorClasses.bg} px-4 py-3 border-b ${colorClasses.border}`}>
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm sm:text-base">
                              {course.class}
                            </h4>
                            <div className="flex items-center gap-3 mt-1">
                              <span className={`text-xs ${colorClasses.text} font-semibold`}>
                                {course.duration}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`text-lg font-bold ${colorClasses.text}`}>
                              {course.fee}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Course Body */}
                      <div className="p-4 bg-white">
                        <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
                          <Calendar size={16} className="text-gray-400" />
                          <span>Starts: {course.startDate}</span>
                        </div>

                        {/* Features */}
                        {course.features && (
                          <div className="space-y-1.5 mb-4">
                            {course.features.map((feature, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-600">
                                <ChevronRight size={12} className={colorClasses.text} />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-4">
                          <button className={`flex-1 ${colorClasses.dark} text-white px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition`}>
                            Apply Now
                          </button>
                          <button className={`flex-1 border ${colorClasses.border} ${colorClasses.text} px-3 py-2 rounded-lg text-sm font-medium hover:${colorClasses.bg} transition`}>
                            Download Brochure
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Note Section */}
          <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl flex gap-3">
            <AlertCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-amber-800">Important Note:</p>
              <p className="text-amber-700">
                Fees mentioned are for academic year 2025-26. Additional charges may apply for hostel, 
                transportation, and other facilities. Contact admission office for scholarship details 
                and installment options.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-5 p-4 bg-gray-50 rounded-xl flex flex-wrap justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Sparkles size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Need help choosing a course?</p>
                <p className="font-semibold text-gray-800">Call: +91 9982451367</p>
              </div>
            </div>
            <button className="text-red-600 font-medium text-sm hover:text-red-700 transition flex items-center gap-1">
              Schedule Free Counseling <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FeeStructureDropdown;