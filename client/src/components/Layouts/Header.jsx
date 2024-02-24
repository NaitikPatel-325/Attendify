import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="flex flex wrap mx-auto max-w-screen-xl px-4 md:px-6 ">

        <div className="text-white w-full md:w-1/2 text-2xl font-semibold whitespace-nowrap dark:text-white mb-4 mb:mb-0">
          <Link to="/" className="pt-4 flex justify-center items-center">
            Attendify
          </Link>
        </div>

        
        <div className="md:hidden text-2xl text-bold flex items-center justify-end">
          <button onClick={toggleDropdown} className="text-gray-700 dark:text-white">
            <i className="bi bi-list"></i>
          </button>
        </div>

       
        {isDropdownOpen && (
          <div id="dropdown-menu" className="md:hidden text-gray-700 dark:text-white w-full mt-4 md:mt-0 md:w-auto md:flex flex-col">
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
            <Link to="/profile" className="block py-2 px-4 hover:bg-gray-100">
              Profile
            </Link>
            <Link to="/Login" className="block py-2 px-4 hover:bg-gray-100">
              Login
            </Link>
          </div>
        )}

       
        <div className="hidden md:flex w-full md:w-1/2 text-white flex justify-center items-center">
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
          <Link to="/profile" className="hover:underline text-gray-700 dark:text-white mr-5">
            Profile
          </Link>
        </div>

       
        <div className="text-white w-full md:w-1/2 flex justify-center items-center">
          <Link to='/login' className=" hidden md:flex md:justify-end border-2 px-4 py-2 bg-blue-500 rounded-md hover:text-black hover:bg-slate-200 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};
