import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/naitik.jpg";

export const Header = () => {

  return (
    <nav className="bg-white dark:bg-gray-900 ">
      <div className="border-b border-slate-200 flex-row flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Attendify
          </span>
        </Link>
        <div className="flex items-center">
          <Link to="/" className="text-gray-700 dark:text-white mr-5">
            Home
          </Link>
          
          <Link to="/event" className="text-gray-700 dark:text-white mr-5">
              Event
          </Link>
          <Link to="/about" className="text-gray-700 dark:text-white mr-5">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 dark:text-white mr-5">
            Contact
          </Link>
          <Link to="/login" className="text-gray-700 dark:text-white mr-5">
            <i className="bi bi-person dark:text-white"></i>
          </Link>
          
        </div>
      </div>
    </nav>

    // <nav>
    //   <div class = "mx-4 py-4">
    //   <Link to="/" className="text-gray-700 dark:text-white mr-5">
    //          Home
    //        </Link>
    //        <Link to="/contact" className="text-gray-700 dark:text-white mr-5">
    //          Contact
    //        </Link>

    //   </div>
    // </nav>
  );
};
