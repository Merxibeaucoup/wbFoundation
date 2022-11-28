import React from "react";

const GoalsList = () => {
  return (
    <div className="goals__list">
      <div className="container">
        {/* first */}
        <div className="row mr-minus-15">
          <div className="col-6 p-15">
            <div className="goals__list__texts">
              <p className="goals__list__texts-number">01</p>
              <h3 className="goals__list__texts-heading">
                Provide clean and safe drinking water
              </h3>
              <p className="goals__list__texts-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio, deleniti saepe voluptates labore eligendi nesciunt
                debitis voluptatem rem sunt vel iure perferendis numquam modi
                excepturi quaerat consequuntur pariatur voluptas provident sequi
                odit illo? Magni laudantium minus fugit voluptates cumque nam
              </p>
            </div>
          </div>
          <div className="col-6 p-15">
            <div className="goals__list__img">
              <img src="/assets/goals/g1.jpg" alt="goal1" />
            </div>
          </div>
        </div>
        {/* second */}
        <div className="row mr-minus-15">
          <div className="col-6 p-15">
            <div className="goals__list__img">
              <img src="/assets/goals/g3.jpg" alt="goal1" />
            </div>
          </div>
          <div className="col-6 pl-15">
            <div className="goals__list__texts">
              <p className="goals__list__texts-number">02</p>
              <h3 className="goals__list__texts-heading">
                Provide Quality education
              </h3>
              <p className="goals__list__texts-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio, deleniti saepe voluptates labore eligendi nesciunt
                debitis voluptatem rem sunt vel iure perferendis numquam modi
                excepturi quaerat consequuntur pariatur voluptas provident sequi
                odit illo? Magni laudantium minus fugit voluptates cumque nam
              </p>
            </div>
          </div>
        </div>
        {/* third */}
        {/* <div className="row mr-minus-15">
          <div className="col-6 p-15">
            <div className="goals__list__texts">
              <p className="goals__list__texts-number">03</p>
              <h3 className="goals__list__texts-heading">
                Provide warm good food
              </h3>
              <p className="goals__list__texts-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Distinctio, deleniti saepe voluptates labore eligendi nesciunt
                debitis voluptatem rem sunt vel iure perferendis numquam modi
                excepturi quaerat consequuntur pariatur voluptas provident sequi
                odit illo? Magni laudantium minus fugit voluptates cumque nam
                consequuntur pariatur voluptas provident sequi odit illo? Magni
                laudantium minus fugit voluptates cumque nam
              </p>
            </div>
          </div>
          <div className="col-6 p-15">
            <div className="goals__list__img">
              <img
                style={{ filter: "grayscale(60%)" }}
                src="/assets/goals/w4.jpg"
                alt="goal1"
              />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GoalsList;
