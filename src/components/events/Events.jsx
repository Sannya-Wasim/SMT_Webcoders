import React from "react";
import { events } from "./events.js";
import EventsCard from "./EventsCard";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Events = () => {
  const ShowUpcomingEvents = () => {
    return (
      <div className="my-10">
        <h1 className="text-center my-6 font-extrabold text-blue-950 text-2xl">
          Upcoming Events
        </h1>
        <div className="flex justify-center">
          {events.upcoming.map((event) => {
            return <EventsCard event={event} />;
          })}
        </div>
      </div>
    );
  };

  const ShowOngoingEvents = () => {
    return (
      <div className="my-10">
        <h1 className="text-center my-6 font-extrabold text-blue-950 text-2xl">
          Ongoing Events
        </h1>
        <div className="flex justify-center">
          {events.ongoing.map((event) => {
            return <EventsCard event={event} />;
          })}
        </div>
      </div>
    );
  };

  const ShowPastEvents = () => {
    return (
      <div className="my-10">
        <h1 className="text-center my-6 font-extrabold text-blue-950 text-2xl">
          Past Events
        </h1>
        <div className="flex justify-center">
          {events.past.map((event) => {
            return <EventsCard event={event} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div>
        <ShowOngoingEvents />
        <ShowUpcomingEvents />
        <ShowPastEvents />
      </div>
      <Footer />
    </div>
  );
};

export default Events;
