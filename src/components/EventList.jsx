import React from "react";

const EventList = ({ item }) => {
  return (
    <div>
      <div
        className="events__box"
        style={{
          backgroundImage: `url(${item.image}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "380px",
        }}
      >
        <h3 className="events__box-title">{item.title}</h3>
        <p className="events__box-desc">{item.desc}</p>
        <p className="events__box-date-loc">
          {item.date} | {item.location}
        </p>
        <button className="btn btn--form">Donate</button>
      </div>
    </div>
  );
};

export default EventList;
