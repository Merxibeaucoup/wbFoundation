import React from "react";
import { eventsData } from "../data/events";

import EventList from "./EventList";

const Events = () => {
  return (
    <div className="container">
      <h1 className="events__header">Annual Events</h1>
      <div className="events">
        {eventsData.map((item) => {
          return <EventList item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Events;
