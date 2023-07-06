import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/rcai_logo.png'

const Navbar = () => {
  return (
    <div>
      <nav class="relative container mx-auto p-6 bg-red-800">
        <div class="flex items-center justify-between">
          <div class="pt-2">
            <img src={logo} alt="Not available" className='w-12 h-12 -my-4'/>
          </div>
          {/* Menu Items */}
          <div class="hidden md:flex space-x-6 text-right text-white">
            <Link class="hover:text-darkGrayishBlue font-bold mx-8" to='/'>Home</Link>
            <Link class="hover:text-darkGrayishBlue font-bold mx-8" to='/about'>About</Link>
            <Link class="hover:text-darkGrayishBlue font-bold mx-8" to='/events'>Events</Link>
            <Link class="hover:text-darkGrayishBlue font-bold mx-8" to='/contact'>Contact Us</Link>
          </div>

          {/* Hamburger Icon*/}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <Link>Services</Link>
            <Link>Industries</Link>
            <Link>About Us</Link>
            <Link>Team DaPixel</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
