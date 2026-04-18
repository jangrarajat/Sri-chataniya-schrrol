import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import FeeStructureDropdown from "./FeeStructureDropdown";

const MainNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const coursesDropdown = [
    { label: "School", href: "/courses#school" },
    { label: "College", href: "/courses#college" },
    { label: "Foundation", href: "/courses#foundation" },
    { label: "Results", href: "/results" },
    { label: "Fee Structure", href: "/courses#fees" },
  ];

  const campusDropdown = [
    { label: "Food & Dining", href: "/campus#dining" },
    { label: "Health", href: "/campus#health" },
    { label: "Hostel & Boarding Facility", href: "/campus#hostel" },
    { label: "Library & Study Material", href: "/campus#library" },
    { label: "Social & Cultural Activities", href: "/campus#activities" },
  ];

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Courses", href: "/courses", submenu: coursesDropdown },
    { label: "Life at Campus", href: "/campus", submenu: campusDropdown },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-12 z-40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776073440/Sri_Chaitanya_Logo_pjwpl3.png"
            alt="Logo"
            className="h-16"
          />
          <div>
            <h1 className="text-red-600 font-bold text-3xl">
              SRI CHAITANYA 
            </h1>
            <p className="text-gray-500 text-sm">
             ACADEMY KOTPUTLI
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-4">
          {menuItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className="flex items-center gap-1 text-gray-700 hover:text-red-600"
              >
                {item.label}
                {item.submenu && <ChevronDown size={16} />}
              </Link>

              {item.label === "Courses" ? (
                <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                  <FeeStructureDropdown />
                </div>
              ) : (
                item.submenu && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-md hidden group-hover:block z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="hidden lg:flex gap-2">
          <Link to="/admission" className="border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-50">
            Admission
          </Link>
          <Link to="/gallery" className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800">
            Gallery
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-100 p-4">
          {menuItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex justify-between items-center w-full py-2 text-left"
                  >
                    <span>{item.label}</span>
                    {item.submenu && <ChevronDown size={16} />}
                  </button>

                  {openDropdown === item.label && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="block py-1 text-gray-600 hover:text-red-600"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  className="block py-2 text-gray-700 hover:text-red-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
            <Link
              to="/admission"
              className="block text-center border border-red-600 text-red-600 px-4 py-2 rounded hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admission
            </Link>
            <Link
              to="/gallery"
              className="block text-center bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;