import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
    },
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    padding: "2rem 6rem 2rem 6rem",
  };

  const inputStyles = {
    fontSize: "2rem",
    color: "#333",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "4px",
    border: "solid 1px grey",
  };

  const buttonStyle = {
    marginTop: "2rem",
    color: " #073b4c",
    fontSize: "1.6rem",
    fontWeight: "600",
    padding: "1rem 3rem 1rem 3rem",
    borderRadius: "9999rem",
    border: "none",
    cursor: "pointer",
  };

  const textStyle = {
    fontSize: "2rem",
    color: "#333",
    borderRadius: "4px",
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div
        className="events__box"
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
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
          <button onClick={onOpenModal} className="btn btn--form">
            {item.action}
          </button>
          <Modal open={open} onClose={onCloseModal} center styles={bg}>
            <form
              target="_blank"
              action="https://formsubmit.co/whelpinghands22@gmail.com"
              method="POST"
              style={formStyles}
            >
              <div>
                <input
                  name="full name"
                  type="text"
                  placeholder="Full Name"
                  style={inputStyles}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  style={inputStyles}
                  required
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Enquiry about events!"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://wb-foundation.vercel.app/thankyou"
                />
                <div className="div">
                  <textarea
                    name="message"
                    cols="40"
                    rows="6"
                    placeholder="Your message here ..."
                    style={textStyle}
                    required
                  />
                </div>
              </div>
              <div>
                <button type="submit" style={buttonStyle}>
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default EventList;
