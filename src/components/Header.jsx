import React, { useState, useEffect } from "react";
import Aos from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Header = () => {
  const [state] = useState({
    image: "assets/header/he1.jpg",
    video: "assets/videos/header.mp4",
    logo: "assets/logo/q1.jpeg",
    title: "Givers Never lack",
    para: " Alone we can do so little; together we can do so much - Hellen Keller",
    swirly: "assets/header/sw1.svg",
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <LazyLoadImage src={state.logo} alt="logo" />
          </div>
        </Link>

        <div className="header__video">
          {/* <LazyLoadImage src={state.image} alt="image" /> */}
          <video
            src={state.video}
            autoPlay
            loop
            muted
            poster={state.poster}
          ></video>
        </div>
        <div className="header__words">
          <div className="container">
            <div
              className="header__words__text"
              // data-aos="zoom-in"
              // data-aos-offset="200"
              // data-aos-easing="ease-in-sine"
            >
              <Fade right cascade>
                <h2 className="header__words__text-title">{state.title}</h2>
                <p className="header__words__text-paragraph">
                  &ldquo;{state.para} &rdquo;
                </p>
              </Fade>
            </div>
          </div>
        </div>
        <div className="header__arrow">
          <img src={state.swirly} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
