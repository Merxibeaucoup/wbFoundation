import React, { useState } from "react";

const Goals = () => {
  const [state] = useState({
    heading: "We're on a MISSION to change other people's lives. Here is how: ",
    paragraph:
      "voluptas alias voluptatum accusamus similique neque. Ab, necessitatibus?consectetur adipisicing elit. Vel est eligendi at sit autem, necessitatibus debitis eos repudiandae nostrum quia soluta harum voluptas alias voluptatum accusamus similique neque. Ab, necessitatibus?",
  });
  return (
    <div className="goals">
      <div className="container">
        <div className="row  mr-minus-15">
          <div className="col-12">
            <h3 className="goals__heading">{state.heading}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
