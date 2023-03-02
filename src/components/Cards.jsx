import React from "react";

const Cards = ({ item }) => {
  return (
    <div className="card">
      <div className="container">
        <div className="card__container">
          <img src={item.image} alt={item.image} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
