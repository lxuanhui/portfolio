import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon, MoonIcon } from '@heroicons/react/24/outline'; // Replace with correct import path based on the installed version

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo or Brand name */}
          <div className="flex items-center justify-start md:pl-10">
            <a href="#" className="text-xl font-semibold mr-10">Portfolio</a>
          </div>

          {/* Centered Navbar items */}
          <div className="hidden md:flex justify-center items-center flex-1">
            {/* Links that will be shown on md screens and larger */}
            <a href="#aboutme" className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium">About Me</a>
            <a href="#" className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Experience</a>
            <a href="#" className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Projects</a>
            <a href="#" className="text-gray-600 px-3 py-2 rounded-md text-lg font-medium">Contact</a>
          </div>

          {/* Right-aligned items, e.g., a contact button or social links */}
          <div className="hidden md:flex flex items-center justify-end px-10 ">
            {/* Elements that will be hidden on mobile screens */}
            {/* dark mode button with color scheme*/}            
            <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 px-3 py-2 rounded-md text-lg font-semibold ml-10 no-underline">Resume</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="#aboutme" className="block py-2 px-4 text-sm text-gray-600">About Me</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600">Experience</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600">Projects</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600">Contact</a>
        <a href="#" className="block py-2 px-4 text-sm text-gray-600">Resume</a>
      </div>
    </nav>
  );
};

export default Navbar;
