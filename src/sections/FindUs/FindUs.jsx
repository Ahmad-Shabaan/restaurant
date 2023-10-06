import React from "react";
import "./FindUs.css";
import { images } from "../../constants";
import { SubHeading } from "./../../components/SubHeading/SubHeading";
export const FindUs = () => {
  return (
    <div className="app__findUs section__padding app__bg" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title={"contact"} />
        <div
          className="header-text__cormorant"
          style={{ marginBottom: "4rem" }}
        >
          find us
        </div>
        <div className="p__openSans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </div>
        <div className="p__cormorant" style={{ margin: "1rem 0" }}>
          opening hours
        </div>
        <div
          className="p__openSans"
          style={{ color: "white", marginBottom: "1rem" }}
        >
          Mon - Fri: 10:00 am - 02:00 am
        </div>
        <div className="p__openSans" style={{ color: "white" }}>
          Sat - Sun: 10:00 am - 03:00 am
        </div>
        <button className="custom__button" style={{marginTop:"4rem"}}>visit us</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findUs" />
      </div>
    </div>
  );
};
