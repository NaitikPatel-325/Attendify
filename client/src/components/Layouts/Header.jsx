import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900">
<<<<<<< Updated upstream
      <div className="flex flex wrap mx-auto max-w-screen-xl px-4 md:px-6 ">

        <div className="text-white w-full md:w-1/2 text-2xl font-semibold whitespace-nowrap dark:text-white mb-4 mb:mb-0">
          <Link to="/" className="pt-4 flex justify-center items-center">
=======
      <div className="border-b border-slate-200 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
        
        <div className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          <Link to="/" className="flex items-center">
>>>>>>> Stashed changes
            Attendify
          </Link>
        </div>

<<<<<<< Updated upstream
        
        <div className="md:hidden text-2xl text-bold flex items-center justify-end">
          <button onClick={toggleDropdown} className="text-gray-700 dark:text-white">
=======
        <div className="md:hidden text-2xl text-bold flex items-center">
          <button
            onClick={toggleDropdown}
            className="text-gray-700 dark:text-white"
          >
>>>>>>> Stashed changes
            <i className="bi bi-list"></i>
          </button>
        </div>

<<<<<<< Updated upstream
       
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

=======
        <div
          id="dropdown-menu"
          className={`md:hidden text-gray-700 flex flex-col dark:text-white mt-4 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
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
          <Link to="/login" className="block py-2 px-4 hover:bg-gray-100">
            <i className="bi bi-person dark:text-white"></i> Login
          </Link>
        </div>

        <div className="hidden md:flex md:ml-auto">
          <Link
            to="/"
            className="hover:underline text-gray-700 dark:text-white mr-5"
          >
            Home
          </Link>
          <Link
            to="/event"
            className="hover:underline text-gray-700 dark:text-white mr-5"
          >
            Event
          </Link>
          <Link
            to="/about"
            className="hover:underline text-gray-700 dark:text-white mr-5"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:underline text-gray-700 dark:text-white mr-5"
          >
            Contact
          </Link>
        </div>
        
        <div className="text-2xl text-bold items-center justify-end md:hidden">
          <Link to="/login" className="text-gray-700 dark:text-white">
            <i className="bi bi-person dark:text-white"></i>
          </Link>
        </div>
      
>>>>>>> Stashed changes
      </div>
    </nav>
  );
};
