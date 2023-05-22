import React from "react";
// import { useState } from "react";

const ContactForm = () => {
  // const [state, setState] = useState({
  //   name: "",
  //   email: "",
  // });

  // const submitContact = (e) => {
  //   e.preventDefault();
  // };
  return (
    <div className="container">
      <div className="cta__layer">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">
              Leave Your Info In The Contact Form!
            </h2>
            <p className="cta-text">
              We would love to get to know you and stay in touch, <br />
              Fill out the contact form below and we will get back to you ASAP.
            </p>

            <form
              className="cta-form"
              name="contact-us"
              target="_blank"
              action="https://formsubmit.co/9e4bbbfb6393d0fbbcf1ac400b1a3ece"
              method="POST"
            >
              <div>
                <label htmlFor="full-name">Full Name</label>
                <input
                  id="full-name"
                  name="full name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="me@example.com"
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
              <input
                type="hidden"
                name="_subject"
                value="someone wants to Get in touch with US !"
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.wbhelpinghands.com/thankyou"
              />

              <button className="btn btn--form">Get in touch with us</button>
            </form>
          </div>
          <div className="cta-img-box" role="img" aria-label="children"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
