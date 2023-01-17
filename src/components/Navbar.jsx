import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__items">
          <Link to="/checkout">
            <button className="navbar__items-donate">Donate</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
