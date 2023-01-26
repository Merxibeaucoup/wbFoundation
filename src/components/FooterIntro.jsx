import React from "react";

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = () => {
  const [state] = useState({
    logo: "/assets/logo/q1.jpeg",
    intro:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illum molestiae quaerat, fugiat ullam eligendi reprehenderit impedit beatae eius. Non, neque. Fugiat delectus accusamus a sequi nihil necessitatibus corporis quisquam.    ",
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">
        <LazyLoadImage src={state.logo} alt="footer logo" />
      </div>
      <p className="footer__intro__msg animation">{state.intro}</p>
    </div>
  );
};

export default FooterIntro;
