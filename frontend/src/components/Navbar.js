import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for Hamburger and Close
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-3">
      <div className="flex justify-between items-center px-6 py-4 ">
        {/* Left side (Logo and Name) */}
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <img
            src="/assets/images/logo_desctop.webp"
            alt="Blossom Logo"
            className="w-8 h-8"
          />
          {/* Company Name */}
          <Link className="text-2xl font-bold text-green-800" to="/">
            KRISHI SAMRIDDHI
          </Link>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-gray-800">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-20 text-lg font-semibold text-gray-700">
        <Link
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900 transition-all duration-300"
            to="/soilmoisture"
          >
              Soil Moisture
          </Link>
          <Link
            className="hover:text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-900 transition-all duration-300"
            to="/croprecommendation"
          >
              Crop Recommendation
          </Link>
        </div>

        {/* Desktop Try for Free Button */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-green-400 to-green-900 text-white font-semibold py-2 px-4 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-md">
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible only on small screens) */}
      {isOpen && (
        <div className="md:hidden bg-white py-2 px-6 space-y-4 shadow-md">
          <Link
            to="/soilmoisture"
            className="block text-lg font-semibold text-gray-700 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300"
          >
            Soil-Moisture
          </Link>
          <Link
            to="/croprecommendation"
            className="block text-lg font-semibold text-gray-700 hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 transition-all duration-300"
          >
            Crop Recommendation
          </Link>
          <button className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold py-2 px-4 rounded-full hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-md">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
