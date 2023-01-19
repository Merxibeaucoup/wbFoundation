import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submitContact = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="cta__layer">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">
              Leave Your Message In The Contact Form!
            </h2>
            <p className="cta-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              hic amet repellat molestias unde quod animi, harum commodi iusto
              adipisci?
            </p>

            <form className="cta-form" name="contact-us">
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="podcast">Instagram</option>
                  <option value="ad">Facebook </option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button className="btn btn--form">Contact Us</button>
            </form>
          </div>
          <div className="cta-img-box" role="img" aria-label="children"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
