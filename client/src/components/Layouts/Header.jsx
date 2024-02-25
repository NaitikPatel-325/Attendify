import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="flex flex-wrap mx-auto max-w-screen-xl px-4 md:px-6 items-center justify-between">

       
        <div className="text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
          <Link to="/" className="pt-4 flex justify-center items-center pb-4">
            Attendify
          </Link>
        </div>

       
        <div className="md:hidden text-2xl text-bold flex items-center">
          <button onClick={toggleDropdown} className="text-gray-700 dark:text-white">
            <i className="bi bi-list"></i>
          </button>
        </div>

        {isDropdownOpen && (
          <div id="dropdown-menu" className="md:hidden text-gray-700 dark:text-white w-full mt-4">
            <Link to="/" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Home
            </Link>
            <Link to="/event" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Event
            </Link>
            <Link to="/about" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              About
            </Link>
            <Link to="/contact" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Contact
            </Link>
            <Link to="/profile" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Profile
            </Link>
            <Link to="/Login" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Login
            </Link>
          </div>
        )}

        
        <div className="hidden md:flex w-full md:w-1/2 text-white  justify-center items-center">
          <Link to="/" className="hover:underline text-gray-700 dark:text-white mx-3">
            Home
          </Link>
          <Link to="/event" className="hover:underline text-gray-700 dark:text-white mx-3">
            Event
          </Link>
          <Link to="/about" className="hover:underline text-gray-700 dark:text-white mx-3">
            About
          </Link>
          <Link to="/contact" className="hover:underline text-gray-700 dark:text-white mx-3">
            Contact
          </Link>
          <Link to="/profile" className="hover:underline text-gray-700 dark:text-white mx-3">
            Profile
          </Link>
        </div>

        <div className="text-white text-xl font-semibold whitespace-nowrap dark:text-white">
          <Link to='/login' className="hidden md:flex border-2 px-4 py-2 bg-blue-500 rounded-md hover:text-black hover:bg-slate-200 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};