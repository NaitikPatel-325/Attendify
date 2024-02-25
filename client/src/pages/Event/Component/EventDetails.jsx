import React from "react";
import Logo from "../../../assets/Event1.jpg";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../../context/create";
import { useNavigate } from "react-router-dom";

export const EventDetails = ({ event }) => {
  const { username, isLoggedIn } = useContext(UserContext);
  const [confirmation, setConfirmation] = useState(false);
  const navigate = useNavigate();

  const showConfirmation = () => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      const userConfirmed = window.confirm(
        "Are you sure you want to register?"
      );

      if (userConfirmed) {
        console.log(username);
        axios
          .post("http://localhost:5000/register_in_event", {
            username: username,
            eventname: event.name,
          })
          .then((res) => {
            if (res.data.status === "Error") {
              alert("User already registered");
              setConfirmation(!userConfirmed);
            } else {
              alert("Registration successful!");
              setConfirmation(userConfirmed);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Registration canceled.");
      }
    } else {
      navigate("/login"); 
    }
  };
  // console.log(event);
  return (
    <div className="flex flex-coloumn flex-wrap">
      <div className="flex flex-row flex-wrap items-center border-2 w-3/4 mx-auto mt-10">
        <img
          className="bg-slate-100 object-cover object-center justify-center w-100 h-60 lg:w-80"
          src={Logo}
          alt="Card Image"
        />
        <div className="p-4 w-full sm:w-full md:w-2/3 lg:w-1/2 xl:w-2/3">
          <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
          <p className="mt-2 text-gray-600 text-justify">{event.description}</p>

          <div className="flex flex-wrap flex-row justify-allign">
            <h2>From : {event.startDate}</h2>
            <h2>To : {event.endDate}</h2>
          </div>

          <div className="flex flex-row flex-wrap justify-allign">
            <h2>Location : {event.Location}</h2>
          </div>

          <div className="flex flex-row flex-wrap justify-allign">
            <h2>Club : {event.club}</h2>
          </div>

          <div className="mt-4">
            <button
              type="button"
              className="text-blue-500 bg-color-blue hover:underline"
              onClick={showConfirmation}
            >
              Register
            </button>
          </div>
          {confirmation && <p>User confirmed registration.</p>}
        </div>
      </div>
    </div>
  );
};
