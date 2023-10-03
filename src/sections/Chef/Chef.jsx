import React from "react";
import "./Chef.css";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
export const Chef = () => {
  return (
    <div className="app__chef section__padding">
      <div className="app__wrapper_img">
        <img src={images.chef} alt="chef" className="app__chef-img" />
      </div>
      <div className="app__wrapper_info">
        <div>
          <SubHeading title={"chef's word"} color={"var(--color-white)"} />
          <div className="header-text__cormorant">What we believe in</div>
        </div>
        <div className="app__chef-p p__openSans">
          <div className="app__chef-quote">
            <img src={images.quote} alt="quote" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <p className="p__openSans">
            Saepe modi beatae delectus atque voluptate numquam unde. Autem
            doloremque minima nostrum esse soluta. Autem praesentium ipsam
            provident quidem vel, nostrum consectetur.
          </p>
        </div>
        <div>
          <h3 className="app__chef-name p__cormorant">Kevin Luo</h3>
          <h5 className="p__openSans">Chef & Founder</h5>
        </div>
        <div className="app__chef-signature">
            <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};
