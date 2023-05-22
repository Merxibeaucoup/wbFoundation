import React, { useState } from "react";
import { Link } from "react-router-dom";

const GoalsList = () => {
  const [state] = useState({
    image: "assets/support/kids1.jpeg",
  });
  return (
    <div className="goals">
      <div className="container">
        <div className="goals__boxes">
          <div className="goals__boxes-box1 box">
            <h3 className="goals__boxes-title">Our Mission</h3>
            <p className="goals__boxes-paragraph">
              As a response to difficulties faced by families in providing
              necessities, WB's Helping Hands is bridging the gap to aid
              families and children in deprived regions. (Ghana).
            </p>
          </div>
          <div
            className="goals__boxes-box2 box"
            style={{
              backgroundImage: `linear-gradient(to bottom, #eb240a9d , #eb240a2e 48%), url(${state.image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h3 className="goals__boxes-title">Support Us</h3>
            <Link to="/checkout">
              <button className="goals__boxes-support btn">Donate</button>
            </Link>
          </div>
          <div className="goals__boxes-box3 box">
            <h3 className="goals__boxes-title">Goals</h3>
            <p className="goals__boxes-paragraph">
              Provide educational opportunities and medical assistance to the
              less privileged, assist with vocational skills and support
              orphanages with life-sustaining necessities.
            </p>
          </div>
          <div className="goals__boxes-box4 box">
            <h3 className="goals__boxes-title">Volunteer</h3>
            <form
              target="_blank"
              action="https://formsubmit.co/wbhelpinghands22@gmail.com"
              method="POST"
              class="goals__boxes__volunteer-form"
            >
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
              />
              <input
                type="hidden"
                name="_subject"
                value="Someone wants to Volunteer Email 😎 📈!"
              />
              <input
                type="hidden"
                name="_next"
                value="https://wb-foundation.vercel.app/thankyou"
              />

              <button type="submit" value="submit" className="btn">
                Volunteer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsList;
