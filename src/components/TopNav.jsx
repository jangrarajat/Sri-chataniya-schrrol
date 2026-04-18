import React from "react";
import {
  Mail,
  Phone,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

const TopNav = () => {
  return (
    <div className="bg-red-700 text-white h-12 sticky top-0 z-50 flex items-center px-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between  items-center gap-52">

        {/* LEFT SECTION - CONTACT */}
        <div className="hidden md:flex items-center gap-6 text-xs lg:text-sm">

          {/* Phone */}
          <a
            href="tel:+919982451367"
            className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 whitespace-nowrap"
          >
            <Phone size={16} />
            <span>+91 9982451367, +91 9983451367</span>
          </a>

          {/* Email */}
          <a
            href="mailto:shricheitanyakotputli@gmail.com"
            className="flex items-center gap-2 hover:text-yellow-300 transition-all duration-300 whitespace-nowrap"
          >
            <Mail size={16} />
            <div className=" flex  flex-col lowercase">
              <span>shricheitanyakotputli@gmail.com</span>
              <span>Kotputlibranchhead@srichaitanyacollege.net</span>
            </div>
          </a>

        </div>
        <div className=" end-full  mx-auto">
          <div className="  flex flex-row gap-5 items-center  w-full">
            <p className=" flex items-center  hover:underline text-xs text-nowrap  "><IndianRupee size={14} />Pay online</p>
            <p className=" flex items-center  gap-1 hover:underline text-xs"> <GraduationCap size={20} /> Alumni</p>
            <input type="text" placeholder="Search" className=" rounded-lg  md:px-3 pl-1 focus:outline-red-300 text-gray-500" />
          </div>
        </div>
        {/* RIGHT SECTION - SOCIAL ICONS */}
        {/* <div className="flex items-center gap-4 ml-auto">

          <a
            href="https://www.facebook.com/share/18fDsdQu5V/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>

          <a
            href="https://www.youtube.com/@srichaitanyakotputli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all duration-300"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>

          <a
            href="https://www.instagram.com/srichaitanyakotputli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

        </div> */}
      </div>
    </div>
  );
};

export default TopNav;