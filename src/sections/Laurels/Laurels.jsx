import React from "react";
import { SubHeading } from "./../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import {awards} from "../../constants/data"
import "./Laurels.css";
export const Laurels = () => {
  return (
    <div className="app__laurels section__padding app__bg" id="landing">
      <div className="app__laurels_logo">
        <img width={100} src={images.logo} alt="" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading
          title={"Awards &Recognition"}
        />
        <h2 className="header-text__cormorant">our Laurels</h2>
        <div className="app__laurels_awards ">
          {awards.map((award, index) => {
            return (
              <div
                className="app__laurels_awards-award"
                key={award.title + index}
              >
                <img src={award.imgUrl} alt="award" />
                <div className="app__laurels_awards-award_content">
                  <p className="p__cormorant">{award.title}</p>
                  <p className="p__openSans">{award.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};
