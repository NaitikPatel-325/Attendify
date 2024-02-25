import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/create";

export const Header = () => {

  const {isLoggedIn} = useContext(UserContext);

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-gray-900 sticky bg-transparent top-0 z-50 bg-opacity-75">
      <div className="flex flex-wrap mx-auto max-w-screen-xl px-4 md:px-6 items-center justify-between">

       
        <div className="text-white text-3xl font-semibold whitespace-nowrap dark:text-white">
          <Link to="/" className="pt-4 flex justify-center items-center pb-4">
            Attendify
          </Link>
        </div>

       
        <div className="md:hidden text-3xl text-bold flex items-center">
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
            <Link to="/profile" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Profile
            </Link>
            <Link to="/Login" className="block py-2 px-4 hover:bg-gray-100" onClick={toggleDropdown}>
              Login
            </Link>
          </div>
        )}

        
        <div className="hidden text-lg md:flex w-full md:w-1/2 text-white  justify-center items-center">
          <Link to="/" className="hover:underline text-gray-700 dark:text-white mx-3">
            Home
          </Link>
          <Link to="/event" className="hover:underline text-gray-700 dark:text-white mx-3">
            Event
          </Link>
          {isLoggedIn && <Link to="/profile" className="hover:underline text-gray-700 dark:text-white mx-3">
            Profile
          </Link>}
        </div>

        {!isLoggedIn &&   <div className="text-white text-xl font-semibold whitespace-nowrap dark:text-white">
          <Link to='/login' className="hidden md:flex border-2 px-4 py-2 bg-blue-500 rounded-md hover:text-black hover:bg-slate-200 focus:outline-none focus:ring focus:border-blue-300">
            Login
          </Link>
        </div>}

      </div>
    </nav>
  );
};