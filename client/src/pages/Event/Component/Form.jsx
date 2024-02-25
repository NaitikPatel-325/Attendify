import React, { useState } from "react";
import axios from "axios";

export const Form = (props) => {
  console.log(props);
  const [isopen, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    eventName: "",
    shortDescription: "",
    inDepthDescription: "",
    clubName: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // console.log("Form submitted with data:", formData);

    setOpen(false);
  };

  const handleCancel = () => {
    console.log("Form cancelled", formData);
    setOpen(false);
  };

  const submithandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register_event", {
        eventName: formData.eventName,
        description: formData.shortDescription,
        startDate: formData.startDate +' '+ formData.startTime +':00',
        endDate: formData.endDate +' '+ formData.endTime +':00',
        Location: formData.location,
        club: formData.clubName,
      })
      .then((res) => {
        console.log(res);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {isopen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md md:w-2/3 lg:w-1/2 xl:w-1/3 h-screen overflow-y-auto shadow-md z-10">
          <h2 className="text-xl font-bold mb-4">Create Event</h2>
          <form onSubmit={submithandler} method="post">
            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                Event Name
              </label>
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                Short Description
              </label>
              <textarea
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                rows="2"
                required
              ></textarea>
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                In-Depth Description
              </label>
              <textarea
                name="inDepthDescription"
                value={formData.inDepthDescription}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                Club Name
              </label>
              <input
                type="text"
                name="clubName"
                value={formData.clubName}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                Start Date
              </label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                Start Time
              </label>
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                End Date
              </label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="mb-1">
              <label className="block text-sm font-bold text-gray-600">
                End Time
              </label>
              <input
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-1">
              <label className="block text-sm font-bold  text-gray-600">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
