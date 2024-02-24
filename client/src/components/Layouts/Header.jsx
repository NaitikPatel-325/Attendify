import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="border-b border-slate-200 flex flex-wrap justify-around flex-row items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">

        <div className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          <Link to="/" className="flex items-center">
            Attendify
          </Link>
        </div>

        <div className="md:hidden text-2xl text-bold flex items-center justify-end">
          <button onClick={toggleDropdown} className="text-gray-700 dark:text-white">
            <i className="bi bi-list"></i>
          </button>
        </div>

        <div id="dropdown-menu" className={`sm:hidden text-gray-700 dark:text-white  mt-4 ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <div>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-100">
              Home
            </Link>
            <Link to="/event" className="block py-2 px-4 hover:bg-gray-100">
              Event
            </Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-gray-100">
              About
            </Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-gray-100">
              Contact
            </Link>
          </div>
          <div>
            <Link to="/login" className="text-gray-700 dark:text-white md:mr-5">
             <i className="bi bi-person  dark:text-white"></i> 
            </Link>
          </div> 
        </div>

          <div className="hidden md:flex md:flex-row md:pl-96">
            <Link to="/" className="hover:underline text-gray-700 dark:text-white mr-5">
              Home
            </Link>
            <Link to="/event" className="hover:underline text-gray-700 dark:text-white mr-5">
              Event
            </Link>
            <Link to="/about" className="hover:underline text-gray-700 dark:text-white mr-5">
              About
            </Link>
            <Link to="/contact" className="hover:underline text-gray-700 dark:text-white mr-5">
              Contact
            </Link>
          </div>
          <div className="md:flex text-2xl text-bold items-center justify-end hidden md:pl-96">
            <Link to="/login" className="text-gray-700 dark:text-white md:mr-5">
             <i className="bi bi-person  dark:text-white"></i> 
            </Link>
          </div>

      
      </div>
    </nav>
  );
};

