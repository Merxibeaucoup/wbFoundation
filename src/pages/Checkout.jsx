import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

import StripeCheckout from "react-stripe-checkout";
import Footer from "../components/Footer";

function Checkout() {
  const [state] = useState({
    logo: "assets/logo/wb-5.png",
    image: "assets/donate/heart1.png",
    support:
      "Please Show your support with a donation of your choice. This will only take a minute.",
  });
  var [number, setNumber] = useState("");

  const numberHandle = (event) => {
    setNumber(event.target.value);
  };

  const makeRequest = (token) => {
    const body = {
      token,
      number,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    setNumber("");

    return fetch(`http://localhost:8282/checkout`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="container">
        <div
          className="donate"
          style={{
            backgroundImage: `linear-gradient(to bottom, #eb240a9d , #eb240a2e 48%), url(${state.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Link to="/">
            <div className="header__logo">
              <LazyLoadImage src={state.logo} alt="logo" />
            </div>
          </Link>
          <div>
            <h3 className="donate__heading">{state.support}</h3>
          </div>
          <div className="donate__form">
            <input
              onChange={numberHandle}
              type="number"
              min="1"
              pattern="^[0-9]"
              placeholder="Enter Number"
              value={number}
            />

            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              token={makeRequest}
              name="WB foundation"
              amount={number * 100}
            >
              <button className="btn ">Donate {number} $</button>
            </StripeCheckout>
          </div>
          <h4 className="donate__thanks">Thank you!</h4>
        </div>
      </div>
    </>
  );
}

export default Checkout;
