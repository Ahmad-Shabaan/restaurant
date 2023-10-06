import React from "react";
import { SubHeading } from "./../SubHeading/SubHeading";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="app__newsLetter">
      <div className="app__newsLetter-content">
        <SubHeading title={"NewsLetter"} />
        <div className="header-text__cormorant" style={{marginBottom:"1rem"}}>
          subscribe to our newsletter
        </div>
        <div className="p__openSans">And never miss latest Updates!</div>
      </div>
      <div className="app__newsLetter-input">
        <input type="email" placeholder="Email Address" />
        <button className="custom__button">subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
