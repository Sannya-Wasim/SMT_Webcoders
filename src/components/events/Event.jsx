import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { events } from "./events.js";
// import image from 'https://images.squarespace-cdn.com/content/v1/5b79970e3c3a53723fab8cfc/1648072708637-L8NKIZXZOSNBDEZITSAA/GN3_8315.JPG?format=1000w'

const Event = () => {
  const { id } = useParams();
  // finding the event
  const event =
    events.past.find((event) => event.id === parseInt(id)) ||
    events.upcoming.find((event) => event.id === parseInt(id)) ||
    events.ongoing.find((event) => event.id === parseInt(id));
  console.log(event);
  return (
    <div>
      <Navbar />
      {event ? (
        <div className="flex justify-between my-10 mx-10 shadow-md shadow-gray-400 rounded-sm">
          <img src={event.img} alt="Not available" className="w-96 h-96 m-6" />
          <div className="my-6">
            <h1 className="text-4xl font-bold text-blue-950 ">{event.title}</h1>
            <p className="text-sm">[{event.date}]</p>
            <p className="my-4 text-black font-bold">{event.location}</p>
            <p>{event.longDescription}</p>
            <button className="my-4">
              <Link
                to="/events"
                className="border-2 border-blue-950 text-white bg-blue-950 rounded-md p-2"
              >
                Go Back
              </Link>
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center text-4xl text-blue-950 font-extrabold my-10">
          Event not found!
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Event;
