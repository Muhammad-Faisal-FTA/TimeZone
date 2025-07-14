
import React, { useState } from 'react';
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Home', 'Shop', 'About', 'Blog', 'Contact'];

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-white ">
            Time <span className='text-red-500'>Zone</span>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>
          {/* icon buttons */}
          <div className="hidden md:flex space-x-6 text-xl text-white">
            <a href="#">
              <IoSearchOutline />
            </a>
            <a href="#">
              <FaCartFlatbedSuitcase />
            </a>
            <a href="#">
              <CgProfile />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-blue-600"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
