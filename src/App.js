import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import Checkout from "./pages/Checkout";
import NoPage from "./pages/NoPage";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/*  checkout page*/}
        <Route path="/checkout" element={<Checkout />} />

        {/*  path to view success page*/}
        <Route path="/success" element={<Success />} />

        {/*  path to view success page*/}
        <Route path="/cancel" element={<Cancel />} />

        {/*  path to view success page*/}
        <Route path="/thankyou" element={<ThankYou />} />

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
