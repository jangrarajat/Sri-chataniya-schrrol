import React from "react";
// Added missing icons to the import list below
// import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, IndianRupee, GraduationCap, MessageCircle } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import { MdAddIcCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

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
            {/* <p className="text-sm">Connect With Us:</p> */}
            {/* These now work because they are imported above */}
            {/* <Facebook size={20} className="cursor-pointer" />
            <Instagram size={20} className="cursor-pointer" />
            <Youtube size={20} className="cursor-pointer" /> */}
          </div>
        </div>

        {/* ... rest of your grid code ... */}
        <div className="grid md:grid-cols-4 gap-10 text-sm ">
          {/* ... Quick Links, Courses, Institutes ... */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li> <a href="/" className=" cursor-pointer  hover:underline">Home</a></li>
              <li> <a href="/about" className=" cursor-pointer  hover:underline">About Us</a></li>
              <li ><a href="/courses" className=" cursor-pointer  hover:underline">Courses</a></li>
              <li> <a href="/admission" className=" cursor-pointer  hover:underline">Admission</a></li>
              <li> <a href="/contact" className=" cursor-pointer  hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        // {/* <Route path="/results" element={<Results />} /> */}
          {/* // <Route path="/team" element={<Team />} /> */}
          {/* // <Route path="/branches" element={<Branches/>} /> */}

          <div>
            <h3 className="font-bold mb-4 text-lg">Academics</h3>
            <ul className="space-y-2 text-gray-300">
              <li className=" cursor-pointer hover:underline">School</li>
              <li className=" cursor-pointer hover:underline">Foundation</li>
              <li className=" cursor-pointer hover:underline">Results</li>
              <li className=" cursor-pointer hover:underline">Careers</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Institutes</h3>
            <ul className="space-y-2 text-gray-300">
              <li className=" cursor-pointer hover:underline">Sri Chaitanya Colleges</li>
              <li className=" cursor-pointer hover:underline">Sri Chaitanya Schools</li>
              <li className=" cursor-pointer hover:underline">Future Pathways</li>
              <li className=" cursor-pointer hover:underline">Sri Chaitanya IAS Academy</li>
              <li className=" cursor-pointer hover:underline">Sri Chaitanya Academy</li>
              <li className=" cursor-pointer hover:underline">Infinity Learn</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Details</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex gap-2 items-start">
                {/* <Mail size={18} /> */}
               
              </div>
              <div className="flex gap-2 items-start">
                {/* <Phone size={18} /> */}
                <div>
                  
                  <p className="text-xs">Timing: 9:30 AM to 6:30 PM (Mon–Sat)</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start">
                {/* <MapPin size={18} /> */}
                <p className="text-xs flex gap-2 ">
                  <CiLocationOn />  Near Krishna Talkies, Old Vinayak Hospital Building,Kotputli - 303108<br />
                </p>
                <p className="text-xs flex gap-2 items-center "><MdAddIcCall /> +91 +919982451367 , +919983451367</p>
                <p className="text-xs flex gap-2 items-center "><MdEmail /> shricheitanyakotputli@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#0b1c3a] py-4 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>© Copyright 2026. Sri Chaitanya Group run by VINAYAK EDUCARE. All Rights Reserved</p>
        <div className="flex gap-6">
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
