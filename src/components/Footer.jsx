import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

import FooterIntro from "./FooterIntro";

const Footer = () => {
  const footerStyles = {
    background: "url(/assets/header/he1.jpg)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <footer className="footer" style={footerStyles}>
      <div className="footer__container">
        <div className="container">
          <div className="footer__container__block">
            <div className="row ml-minus-15 mr-minus-15">
              <div className="col-6 p-15">
                <FooterIntro />
              </div>
              <div className="col-6 p-15">
                <div className="footer__contact">
                  <h3 className="footer__contact__heading">Contact Us</h3>
                  <address className="footer__contact__address">
                    <p class=" footer__contact__address-address">
                      Pawtucket, Rhode Island, USA 02867
                    </p>
                    <p>
                      <a
                        class="footer__contact__address-link"
                        href="tel: 401-000-0000"
                      >
                        401-000-0000
                      </a>
                      <br />
                      <a
                        class="footer__contact__address-link"
                        href="mailto:wbhelpinghands@gmail.com"
                      >
                        wbhelpinghands22@gmail.com
                      </a>
                    </p>
                  </address>
                  <div className="footer__contact__icons">
                    <ul>
                      <li>
                        <a href="#">
                          <BsFacebook />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <BsInstagram />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <BsTwitter />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer__builder">
                    Website Designed and Created by Edgar Briandt
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <p>
              &copy; copyright WB's helping hand foundation{"  "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
