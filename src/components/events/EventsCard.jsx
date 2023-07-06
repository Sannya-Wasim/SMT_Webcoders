import React from "react";
import { Link } from "react-router-dom";

const EventsCard = ({ event }) => {
  return (
    <div className="flex justify-center mx-4">
      <div className="w-64 h-100 m-4 p-4 border-2 rounded-md items-center text-center transition-all duration-300 hover:shadow-lg">
        <img
          src={event.img}
          alt="Not available"
          className="w-48 h-48 mx-4 my-2"
        />
        <h3 className="font-bold text-blue-950 m-2">{event.title}</h3>
        <p>{event.description.substring(0, 40)}...</p>
        <button className="my-4">
          <Link
            to={`/events/${event.id}`}
            className="border-2 border-blue-950 text-white bg-blue-950 rounded-md p-2"
            
          >
            Read More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
