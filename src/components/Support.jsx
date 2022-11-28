import React from "react";

const Support = () => {
  return (
    <div className="support">
      <div className="container">
        <h3 className="support__title">
          Your Support Helps Our <br /> Community
        </h3>
        <p className="support__desc">
          By Supporting WBfoudation, you are supporting unfortanate individuals
          in <br /> Ghana, west Africa. <br />
          What started as an annual food drive 4 years ago has <br /> blossomed
          into a community centered organization focused on providing <br />{" "}
          quality life for unfortunate individuals.
        </p>
        <div className="support__boxContainer">
          <div className="support__box-1">
            <h3 className="support__boxTitle">
              Support <br /> a Kid
            </h3>
            <p className="support__boxDesc">
              Your generous support drives our mission and enables us to make an
              impact in our community. You are vital to the work that we do.
            </p>
            <button className="btn btn--form">Donate</button>
          </div>
          <div className="support__box-2">
            <h3 className="support__boxTitle">Sponsor WBFoundation</h3>
            <p className="support__boxDesc">
              Becoming a WBFoundation Team sponsor is a smart and strategic way
              to build brand awareness and strengthen your consumer loyalty
            </p>
            <button className="btn btn--form">Sponsor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
