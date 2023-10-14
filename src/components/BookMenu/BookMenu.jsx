import React, { useState } from "react";
import "./BookMenu.css";
import { BsHeart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

export const BookMenu = ({ title, price, tags, img }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoading = () => {
    setIsLoading(false);
  };
  return (
    <>
      {isLoading && (
        <div
          className="app_bookMenu-loading"
        ></div>
      )}
      <div
        className="app_bookMenu-item"
        style={{ display: isLoading ? "none" : "block" }}
      >
        <div className="app_bookMenu-item_image">
          <div>
            <BsCartCheck cursor={"pointer"} />
            <BsHeart cursor={"pointer"} />{" "}
          </div>
          <img src={img} alt="" onLoad={handleLoading} />
        </div>
        <h4 className="p__cormorant">{title}</h4>
        <p className="p__cormorant">{price}</p>
        <p className="p__openSans">{tags}</p>
      </div>
    </>
  );
};
