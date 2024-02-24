import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/naitik.jpg";

export const Header = () => {

  return (
    <nav className="bg-white dark:bg-gray-900">
      <div className="border-b border-slate-200 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
        <div className="text-2xl font-semibold whitespace-nowrap dark:text-white">
          <Link to="/" className="flex items-center">
           Attendify
          </Link>
        </div>

        
        <div className="flex items-center justify-center pl-96">
          <Link to="/" className=" hover:underline text-gray-700 dark:text-white mr-5">
            Home
          </Link>
          
          <Link to="/event" className=" hover:underline text-gray-700 dark:text-white mr-5">
              Event
          </Link>
          <Link to="/about" className=" hover:underline text-gray-700 dark:text-white mr-5">
            About
          </Link>
          <Link to="/contact" className=" hover:underline text-gray-700 dark:text-white mr-5">
            Contact
          </Link>
          
          </div>

          <div className="text-2xl text-bold flex items-center justify-end pl-96">
            <Link to="/login" className="text-gray-700 dark:text-white mr-5">
              <i className="bi bi-person dark:text-white"></i>
            </Link>
          </div>
      </div>
    </nav>

  );
};
