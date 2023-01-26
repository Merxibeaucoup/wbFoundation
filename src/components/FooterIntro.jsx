import React from "react";

import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FooterIntro = () => {
  const [state] = useState({
    logo: "/assets/logo/q1.jpeg",
    intro:
      "By browsing this website, you acknowledge and agree that your access to information on these pages constitutes acceptance. If you do not agree to the use, terms and or anything on this website, please do not use , donate and or put your information on this website.",
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
