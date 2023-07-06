import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/rcai_logo.png";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };
  return (
    <nav class="relative container w-full p-6 bg-red-800">
      <div class="flex items-center justify-between">
        <div class="pt-2">
          <img src={logo} alt="Not available" className="w-12 h-12 -my-4" />
        </div>
        {/* Menu Items */}
        <div class="hidden md:flex space-x-6 text-right text-white">
          <Link class="hover:text-darkGrayishBlue font-bold " to="/">
            Home
          </Link>
          <Link class="hover:text-darkGrayishBlue font-bold " to="/about">
            About
          </Link>
          <Link class="hover:text-darkGrayishBlue font-bold " to="/events">
            Events
          </Link>
          <Link class="hover:text-darkGrayishBlue font-bold " to="/contact">
            Contact
          </Link>
        </div>

        {/* Hamburger Icon*/}
        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
          onClick={handleToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div
          id="menu"
          className="absolute  flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <Link class="text-blue-950 hover:text-red-700 font-bold " to="/">
            Home
          </Link>
          <Link class="text-blue-950 hover:text-red-700 font-bold " to="/about">
            About
          </Link>
          <Link class="text-blue-950 hover:text-red-700 font-bold " to="/events">
            Events
          </Link>
          <Link class="text-blue-950 hover:text-red-700 font-bold " to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
