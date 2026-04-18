import React from "react";
// Added missing icons to the import list below
// import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, IndianRupee, GraduationCap, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#142850] text-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* LOGO + SOCIAL */}
        <div className="flex justify-between items-center border-b border-gray-500 pb-6 mb-10">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776073440/Sri_Chaitanya_Logo_pjwpl3.png"
              className="w-16"
              alt="Logo"
            />
            <div>
              <h2 className="text-2xl font-bold">Sri Chaitanya</h2>
              <p className="text-sm text-gray-300">Educational Institutions</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm">Connect With Us:</p>
            {/* These now work because they are imported above */}
            {/* <Facebook size={20} className="cursor-pointer" />
            <Instagram size={20} className="cursor-pointer" />
            <Youtube size={20} className="cursor-pointer" /> */}
          </div>
        </div>

        {/* ... rest of your grid code ... */}
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          {/* ... Quick Links, Courses, Institutes ... */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sri Chaitanya Alumni</li>
              <li>Student Login</li>
              <li>Parent Login</li>
              <li>Branch Locator</li>
              <li>Our Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Courses</h3>
            <ul className="space-y-2 text-gray-300">
              <li>NEET UG</li>
              <li>IIT (Main & Advanced)</li>
              <li>National Engineering Intensive Course</li>
              <li>Intermediate Public Exam</li>
              <li>UPSC SERVICES</li>
              <li>Sri Chaitanya Academy</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Institutes</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Sri Chaitanya Colleges</li>
              <li>Sri Chaitanya Schools</li>
              <li>Future Pathways</li>
              <li>Sri Chaitanya IAS Academy</li>
              <li>Sri Chaitanya Academy</li>
              <li>Infinity Learn</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Details</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-2 items-start">
                {/* <Mail size={18} /> */}
                <span>For College Grievances</span>
              </div>
              <div className="flex gap-2 items-start">
                {/* <Phone size={18} /> */}
                <div>
                  <p>040-66 06 06 06</p>
                  <p className="text-xs">Timing: 9:30 AM to 6:30 PM (Mon–Sat)</p>
                </div>
              </div>
              <div className="flex gap-2 items-start">
                {/* <MapPin size={18} /> */}
                <p className="text-xs">
                  Plot # 304, Kasetty Heights,<br />
                  Sri Ayyappa Society, Madhapur,<br />
                  Hyderabad - 500081,<br />
                  Telangana, INDIA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#0b1c3a] py-4 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>© Copyright 2026. Sri Chaitanya Group. All Rights Reserved.</p>
        <div className="flex gap-6">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;