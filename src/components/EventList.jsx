import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";

const EventList = ({ item }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const bg = {
    overlay: {
      background: "rgba(23, 25, 26, 0.544)",
    },
    modal: {
      background: "#b2dbbf",
      width: "500px",
      height: "100px",
    },
  };
  return (
    <div>
      <div className="events__box">
        <div className="events__box-img">
          <LazyLoadImage src={item.image} alt={item.image} />
        </div>
        <div className="events__box-contents">
          <h3 className="events__box-title">{item.title}</h3>
          <p className="events__box-desc">{item.desc}</p>
          <p className="events__box-date-loc">
            {item.date} | {item.location}
          </p>
          <button onClick={onOpenModal} className="btn btn--form">
            {item.action}
          </button>
          <Modal open={open} onClose={onCloseModal} center styles={bg}>
            <form action="POST" style={{ display: "flex", gap: "1rem" }}>
              <input type="text" placeholder="fullname" />

              <input type="email" />

              <button type="submit">Submit</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default EventList;
