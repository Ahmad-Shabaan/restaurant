import React from "react";
import images from "../../constants/images";
import "./Header.css";
import { SubHeading } from "../../components/SubHeading/SubHeading";
export const Header = () => {
  return (
    <div className="app__header app__bg section__padding">
      <div className="app__wrapper_info">
        <SubHeading title={"Chase the new Flavour"} color={"var(--color-white)"}/>
        <h2 className="app__header-h2 p__cormorant ">The key to Fine dining</h2>
        <p className="app__header-p p__openSans">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button className="custom__button">Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" className="app__header-img" />
      </div>
    </div>
  );
};
