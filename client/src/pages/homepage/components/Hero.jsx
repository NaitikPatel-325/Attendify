import React from 'react';
import Logo from "../../../assets/home_page.webp";

export const Hero = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="relative bg-gradient-to-r from-gray-700 to-gray-900 text-white py-60 text-center">
        <div className="absolute inset-0">
          <img src={Logo} alt="Background Image" className="w-full h-full object-cover opacity-40"/>
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 flex justify-start pl-28 pb-4">Welcome to Attendify</h1>
          <p className="text-lg md:text-xl max-w-screen-md flex justify-start pl-10 pb-4">
            Attendify is dedicated to creating unforgettable experiences for both students and clubs. We believe in the power of events to bring people together and create lasting memories. Our platform is designed to facilitate seamless event management for clubs and provide students with easy access to exciting and engaging activities.
          </p>
        </div>
      </div>
  
    </div>
  );
};


