import React from "react";
import { FooterOverlay } from "../../components";
import NewsLetter from "./../../components/Footer/NewsLetter";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
export const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <NewsLetter />
      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h3 className="p__cormorant">contact us</h3>
          <p className="p__openSans">9 W 53rd St, New York, NY 100019, USA </p>
          <p className="p__openSans">+1 212-343-1230</p>
          <p className="p__openSans">+1 212-343-1230</p>
        </div>
        <div className="app__footer-links_logos">
          <img src={images.gericht} alt="logo" />
          <p className="p__openSans">
            "The best way to find yourself is to lose yourself in the service of
            others."
          </p>
          <img src={images.spoon} alt="spoon" />
          <div className="logos__socialMedia">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_working">
          <h3 className="p__cormorant">working hours</h3>
          <p className="p__openSans">Monday-Friday: 08:00 am -12:00 am</p>
          <p className="p__openSans">Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="app__footer-rights p__openSans">
        2023 Gerícht. All Rights reserved.
      </div>
    </div>
  );
};
