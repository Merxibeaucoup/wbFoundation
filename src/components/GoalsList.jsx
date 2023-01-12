import React from "react";

const GoalsList = () => {
  return (
    <div className="goals">
      <div className="container">
        <div className="goals__boxes">
          <div className="goals__boxes-box1">box1</div>
          <div
            className="goals__boxes-box2"
            style={{ backgroundImage: "url(/public/assets/support/hope.jpg)" }}
          >
            box2
          </div>
          <div className="goals__boxes-box3">box3</div>
          <div className="goals__boxes-box4">box4</div>
        </div>
      </div>
    </div>
  );
};

export default GoalsList;
