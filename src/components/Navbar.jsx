import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__items">
        <button className="navbar__items-about ">About</button>
        <button className="navbar__items-donate">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
