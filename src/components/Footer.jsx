import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* ABOUT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img
              src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776073440/Sri_Chaitanya_Logo_pjwpl3.png"
              className="w-16"
              alt="Logo"
            />
            <h3 className="text-white font-bold text-lg">
              Sri Chetanaya
            </h3>
          </div>

          <p className="text-sm mb-4">
            Excellence in education since 1995.
          </p>

          <div className="flex gap-3">
            <a href="#" className="hover:text-yellow-400">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Youtube size={18} />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-400">Courses</Link></li>
            <li><Link to="/admission" className="hover:text-yellow-400">Admission</Link></li>
          </ul>
        </div>

        {/* ACADEMICS */}
        <div>
          <h3 className="text-white font-bold mb-4">Academics</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/courses" className="hover:text-yellow-400">School</Link></li>
            <li><Link to="/courses" className="hover:text-yellow-400">Foundation</Link></li>
            <li><Link to="/results" className="hover:text-yellow-400">Results</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-bold mb-4">Contact</h3>

          <div className="space-y-3 text-sm">
            <p className="flex gap-2">
              <MapPin size={16} /> Kotputli, Rajasthan
            </p>

            <a href="tel:+919982451367" className="flex gap-2 hover:text-yellow-400">
              <Phone size={16} /> +91 9982451367
            </a>

            <a href="mailto:info@gmail.com" className="flex gap-2 hover:text-yellow-400">
              <Mail size={16} /> info@gmail.com
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 py-6 text-center text-sm">
        © 2026 Sri Chetanaya | All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;