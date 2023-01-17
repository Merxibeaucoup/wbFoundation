import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const EventList = ({ item }) => {
  return (
    <div>
      <div
        className="events__box"
        // style={{
        //   backgroundImage: `url(${item.image}`,
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        //   width: "380px",
        // }}
      >
        <div className="events__box-img">
          <LazyLoadImage src={item.image} alt={item.image} />
        </div>
        <div className="events__box-contents">
          <h3 className="events__box-title">{item.title}</h3>
          <p className="events__box-desc">{item.desc}</p>
          <p className="events__box-date-loc">
            {item.date} | {item.location}
          </p>
          <button className="btn btn--form">{item.action}</button>
        </div>
      </div>
    </div>
  );
};

export default EventList;
