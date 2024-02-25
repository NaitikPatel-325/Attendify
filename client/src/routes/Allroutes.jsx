import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About,Login,Register,Profile, Entry } from "../pages/index";

export const Allroutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/event" element={<Entry />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
  );
};
