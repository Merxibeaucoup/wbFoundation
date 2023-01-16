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
    <div class="container">
      <div className="cta__layer">
        <div class="cta">
          <div class="cta-text-box">
            <h2 class="heading-secondary">
              Leave Your Message In The Contact Form!
            </h2>
            <p class="cta-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              hic amet repellat molestias unde quod animi, harum commodi iusto
              adipisci?
            </p>

            <form class="cta-form" name="contact-us" netlify>
              <div>
                <label for="full-name">Full Name</label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="John Smith"
                  name="full-name"
                  required
                />
              </div>

              <div>
                <label for="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="me@example.com"
                  name="email"
                  required
                />
              </div>

              <div>
                <label for="select-where">Where did you hear from us?</label>
                <select id="select-where" name="select-where" required>
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="podcast">Instagram</option>
                  <option value="ad">Facebook </option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button class="btn btn--form">Contact Us</button>
            </form>
          </div>
          <div class="cta-img-box" role="img" aria-label="children"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
