import React, { useState } from "react";

const Hope = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const messages = [
    "Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.",
    "Hope is the thing with feathers that perches in the soul and sings the tune without the words and never stops at all.",
    "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "All kids need is a little help, a little hope and somebody who believes in them.",
    "Hope is being able to see that there is light despite all of the darkness.",
    "To live without hope is to cease to live.",
    "Few things in the world are more powerful than a positive push. A smile. A world of optimism and hope. A ‘you can do it’ when things are tough.",
    "A strong mind always hopes, and has always cause to hope.",
    "Hope never abandons you, you abandon it.",
    "When you stop hoping you start settling.",
    "Hope lies in dreams, in imagination, and in the courage of those who dare to make dreams into reality.",
    "There are far, far better things ahead than anything we leave behind.",
    "Hope sees the invisible, feels the intangible, and achieves the impossible.",
    "Once you choose hope, anything is possible.",
    "To plant a garden is to believe in tomorrow.",
    "For every dark night there is a brighter day.",
    "Hope is the word which God has written on the brow of every man.",
    "The moment you doubt whether you can fly, you cease forever to be able to do it.",
  ];

  const displayRandom = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="container">
      <div className="hope">
        <h3 className="hope__title">
          Fear never builds the future,
          <br />
          but <span style={{ color: "#dd2477d1" }}>HOPE</span> does.
        </h3>
        <p className="hope__desc">
          HOPE is an acronym we have chosen to help you understand our mission.
        </p>

        <div className="hope__letterContainer">
          <h3
            className="hope__letterContainer__letter"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            H<p className="hope__letterContainer__letterDesc">Helping</p>
          </h3>
          <h3
            className="hope__letterContainer__letter"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            O<p className="hope__letterContainer__letterDesc">Other</p>
          </h3>
          <h3
            className="hope__letterContainer__letter"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            P<p className="hope__letterContainer__letterDesc">People</p>
          </h3>
          <h3
            className="hope__letterContainer__letter"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            E<p className="hope__letterContainer__letterDesc">Excel</p>
          </h3>
        </div>

        {isHovering && (
          <div className="hope__msgContainer">
            <p className="hope__msgContainer__message">{displayRandom}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hope;
