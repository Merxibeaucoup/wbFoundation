import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = () => {
  const [state] = useState({
    image: "assets/header/he1.jpg",
    logo: "assets/logo/wb-5.png",
    title: "",
  });

  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <LazyLoadImage src={state.logo} alt="logo" />
        </div>
        <h3 className="header__title">
          Lets make a difference together <br /> for a cause that matters!
        </h3>

        {/* <div className="header__pay">
          <button className=" btn--circle">Donate</button>
        </div> */}
        <div className="header__img">
          <LazyLoadImage src={state.image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
