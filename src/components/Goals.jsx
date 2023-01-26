import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Goals = () => {
  const [state] = useState({
    heading: "We're on a MISSION to change other people's lives. Here is how: ",
  });

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="goals ">
      <div className="container">
        <div className="row  mr-minus-15">
          <div className="col-12">
            <h3
              className="goals__heading"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
            >
              {state.heading}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
