import React, { useState } from "react";

const Support = ({ item }) => {
  const [state] = useState({
    heading: "About Us",
    desc: '   WBs Helping Hands Foundation, with continuous commitment established in 2018. The founder was supporting several students financially to further their education due to hardship their families were facing. Some students in elementary school popularly known as "primary" in Ghana, high school and College. He found the passion for expanding this organizational outreach and not limiting himself to prodigy financial support.Outside of making sure kids were furthering their education, he also made sure he was providing provisions, money and hygiene products for several orphanages yearly.',
  });
  return (
    <div className="support">
      <div className="container">
        <h3 className="support__title">{state.heading}</h3>
        <p className="support__desc">{state.desc}</p>
      </div>
    </div>
  );
};

export default Support;
