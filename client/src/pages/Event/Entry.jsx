import React, { useState, useEffect } from "react";
import axios from "axios";
import { EventDetails } from "./Component/EventDetails";
import { Form } from "./Component/Form";
import { useContext } from "react";
import UserContext from "../../context/create";



export const Entry = () => {
  // const [events, setEvents] = useState([]);  
  // const [isclub, setClub] = useState(true);
  const [isformopen, setFormOpen] = useState(false);

  const  {
    isLoggedIn,
    isClub,
  }= useContext(UserContext);

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:5000/fetchevent", {})
  //     .then((res) => {
  //       setEvents(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const formhandler = () => {
  //   setFormOpen((prev) => !prev);
  // };

  return (
    <>
    {/* { isClub && isLoggedIn &&( */}
      <div className='pt-2 pr-2'>
        <div className="flex justify-end ">
        <button

          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setFormOpen((prev) => !prev)}
        >
          Create Event
        </button>
        </div>
      </div>
    {/* )} */}
      <div className="flex flex-col justify-center">
        {/* {events.map((event) => (
          <EventDetails key={event.ID} event={event} />
        ))} */}
      </div>
      
      <EventDetails />
      { isformopen &&
       <Form 
        />
      }
    </>
  );
};
