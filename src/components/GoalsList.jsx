import React, { useState } from "react";

const GoalsList = () => {
  const [state] = useState({
    image: "assets/support/kids1.jpeg",
  });
  return (
    <div className="goals">
      <div className="container">
        <div className="goals__boxes">
          <div className="goals__boxes-box1 box">
            <h3 className="goals__boxes-title">Mission One</h3>
            <p className="goals__boxes-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              maiores facere iusto tenetur laborum. Vitae consequatur id
              corrupti deleniti. Iste in ea itaque quos id voluptas ullam non,
              sapiente quibusdam quod veritatis consectetur corporis alias
              incidunt ab! Neque inventore dolorem temporibus quaerat a minima,
              voluptas deleniti? Ullam culpa dolorum adipisci.
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
            <button className="goals__boxes-support btn">Donate</button>
          </div>
          <div className="goals__boxes-box3 box">
            <h3 className="goals__boxes-title">Mission Two</h3>
            <p className="goals__boxes-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              maiores facere iusto tenetur laborum. Vitae consequatur id
              corrupti deleniti. Iste in ea itaque quos id voluptas ullam non,
              sapiente quibusdam quod veritatis consectetur corporis alias
            </p>
          </div>
          <div className="goals__boxes-box4 box">
            <h3 className="goals__boxes-title">Volunteer</h3>
            <form
              action="https://formsubmit.co/9e4bbbfb6393d0fbbcf1ac400b1a3ece"
              method="POST"
              class="goals__boxes__volunteer-form"
            >
              <input
                id="volunteer-email"
                type="text"
                placeholder="Your e-mail"
                name="volunteer-email"
                required
              />
            </form>
            <button type="submit" className="goals__boxes-support btn">
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsList;
