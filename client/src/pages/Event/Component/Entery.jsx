import React from 'react';
import Logo from "../../../assets/Event1.jpg";

export const Entery = () => {
  return (
    <div className="flex-row">
      <div className="flex md:justify-center items-center border-2 w-3/4 mx-auto mt-10">
        <img className="bg-slate-100 object-cover object-center w-2/3 h-60" src={Logo} alt="Card Image" />
        <div className="p-4 max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800">InnovateTech Expo</h2>
          <p className="mt-2 text-gray-600 text-justify">Dive into the world of innovation! InnovateTech Expo is a technology exhibition showcasing the latest gadgets, software, and groundbreaking technologies. Connect with industry leaders and experience the future.</p>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Date</h2>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center border-2 w-3/4 mx-auto mt-10">
        <img className="bg-slate-100 object-cover object-center w-2/3 h-60" src={Logo} alt="Card Image" />
        <div className="p-4 max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800">InnovateTech Expo</h2>
          <p className="mt-2 text-gray-600 text-justify">Dive into the world of innovation! InnovateTech Expo is a technology exhibition showcasing the latest gadgets, software, and groundbreaking technologies. Connect with industry leaders and experience the future.</p>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Date</h2>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center border-2 w-3/4 mx-auto mt-10">
        <img className="bg-slate-100 object-cover object-center w-2/3 h-60" src={Logo} alt="Card Image" />
        <div className="p-4 max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800">InnovateTech Expo</h2>
          <p className="mt-2 text-gray-600">Dive into the world of innovation! InnovateTech Expo is a technology exhibition showcasing the latest gadgets, software, and groundbreaking technologies. Connect with industry leaders and experience the future.</p>
          <h2 className="text-xl font-semibold text-gray-800 mt-2">Date</h2>
          <div className="mt-4">
            <a href="#" className="text-blue-500 hover:underline">Read more</a>
          </div>
        </div>
      </div>
    </div>
  );
};
