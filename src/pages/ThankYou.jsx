import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const ThankYou = () => {
  const [state] = useState({
    image: "assets/thanks/TYhand.svg",
    title: "Thank you for contacting us!!",
    para1: "We will respond to you as soon as we can.",
  });

  const { width, height } = useWindowSize();
  const nav = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      nav("/");
    }, 7000);
  }, []);

  return (
    <div className="thanks">
      <div className="thanks__content">
        <img src={state.image} alt="" className="thanks__img" />
        <h1 className="thanks__heading">{state.title}</h1>
        <p className="thanks__paragraph">{state.para1}</p>
      </div>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={300}
        confettiSource={{ x: width, y: height, h: 20, w: 30 }}
        friction={1}
        gravity={0.09}
        initialVelocityX={{ min: -24, max: 24 }}
        initialVelocityY={{ min: -10, max: 24 }}
      />
    </div>
  );
};

export default ThankYou;
