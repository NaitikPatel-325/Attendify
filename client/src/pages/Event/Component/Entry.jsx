import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
import { EventDetails } from "./EventDetails";

export const Entry = () => {
  // const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   axios.post("http://localhost:5000/fetchevent", {})
  //     .then((res) => {
  //       setEvents(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="flex flex-col justify-center">
      {/* {events.map((event) => (
        <EventDetails key={event.ID} event={event} />
      ))} */}
      {
        createevent
        &&
        <EventDetails />
      }
    </div>
  );
};
