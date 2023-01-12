import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  const [state] = useState({
    image: "assets/header/he1.jpg",
    logo: "assets/logo/wb-5.png",
    title: "Givers Never lack",
    para: "ahsiaaslknlqw wkdnkjew eknfewj qkneqwj kewqnfjewq qwknwqdqwenfljweq sncwq jn dfn ",
    swirly: "assets/header/sw1.svg",
  });

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <LazyLoadImage src={state.logo} alt="logo" />
        </div>

        <div className="header__img">
          <LazyLoadImage src={state.image} alt="image" />
        </div>
        <div className="header__words">
          <div className="container">
            <div className="header__words__text">
              <h2 className="header__words__text-title">{state.title}</h2>
              <p className="header__words__text-paragraph">
                &ldquo;{state.para} &rdquo;
              </p>
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
