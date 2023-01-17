import React, { useState } from "react";

import StripeCheckout from "react-stripe-checkout";
import Header from "../components/Header";

function Checkout() {
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
      <Header />
      <div className="container">
        <div>
          <label>Enter amount to donate</label>
          <input
            onChange={numberHandle}
            type="number"
            placeholder="Enter Number"
            value={number}
          />

          <StripeCheckout
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={makeRequest}
            name="WB foundation"
            amount={number * 100}
          >
            <button className="btn-large ">Donate {number} $</button>
          </StripeCheckout>
        </div>
      </div>
    </>
  );
}

export default Checkout;
