import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { events } from "./events.js";

const Event = () => {
  const { eventId } = useParams();
  const event =
    events.ongoing.find((event) => event.id === parseInt(eventId));

  return (
    <div>
      <Navbar />
      {event ? (
        <div className="my-10 mx-4 md:mx-8 shadow-md shadow-gray-400 rounded-sm">
          <div className="flex flex-col md:flex-row">
            <img
              src={event.img}
              alt="Not available"
              className="w-full md:w-96 h-auto m-6"
            />
            <div className="flex flex-col justify-center m-6">
              <h1 className="text-4xl font-bold text-blue-950 ">
                {event.title}
              </h1>
              <p className="text-sm">[{event.date}]</p>
              <p className="my-4 text-black font-bold">{event.location}</p>
              <p>{event.description}</p>
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
