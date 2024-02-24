import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Contact,Login,Register,Event,Profile } from "../pages/index";

export const Allroutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/event" element={<Event />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
  );
};
