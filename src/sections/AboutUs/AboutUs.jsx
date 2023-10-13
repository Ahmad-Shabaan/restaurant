import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { Element, scroller } from "react-scroll";

import "./AboutUs.css";
export const AboutUs = () => {
  return (
    <Element name="about">
      <div className="app__about-us .app__bg section__padding">
        <div className="app__wrapper-info">
          <SubHeading title={"about us"} />
          <p className="p__openSans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="custom__button">know more</button>
        </div>
        <div className="app__wrapper-img">
          <img src={images.knife} alt="knife" className="app__about-us-img" />
        </div>
        <div className="app__wrapper-info">
          <SubHeading title={"Our History"} />
          <p className="p__openSans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.{" "}
          </p>
          <button className="custom__button">know more</button>
        </div>
      </div>
    </Element>
  );
};
