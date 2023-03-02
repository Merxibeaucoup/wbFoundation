import React from "react";
import { eventsData } from "../data/events";

import EventList from "./EventList";

const Events = () => {
  return (
    <div className="container">
      <h1 className="events__header">Annual Events</h1>
      <p className="events__subtitle">You are vital to the work that we do.</p>
      <div className="events">
        {eventsData.map((item) => {
          return <EventList item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Events;
