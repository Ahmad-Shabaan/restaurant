import React from "react";
import { images } from "../../constants";
import { cocktails } from "../../constants/data";
import { wines } from "../../constants/data";
import { Link } from "react-router-dom";
import "./BookTable.css";
import { PiHandbagLight } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { BookMenu } from "../../components/BookMenu/BookMenu";
export const BookTable = ({ handleLogoutRef }) => {
  return (
    <>
      <nav className="app__nav app__bookTable">
        <div className="app__nav-logo">
          <img src={images.gericht} alt="logo" />
        </div>
        <div className="app__nav-logo app_bookTable-nav">
          <Link to={"/"}>
            <IoHomeOutline />
          </Link>
          <Link to={"/"}>
            <PiHandbagLight />
          </Link>
          <Link to={"/"}>
            <BsHeart />
          </Link>
          <Link
            to={"/"}
            onClick={() => {
              handleLogoutRef();
            }}
          >
            <CiUser />
          </Link>
        </div>
      </nav>
      <div className="app__shop-menu section__padding app__bg">
        <h2 className="app__shop-menu-h2 header-text__cormorant">
          Today’s Special
        </h2>
        <div className="app__shop-menu-wrapper">
          <div className="app__wrapper_info">
            <h3 className="app__shop-menu-h3">Sandwiches & Burger</h3>
            <div className="app__subMenu-burgers">
              {wines.map((win, index) => {
                return (
                  <BookMenu
                    key={win.title + index}
                    title={win.title}
                    tags={win.tags}
                    price={win.price}
                    img={win.img}
                  />
                );
              })}
            </div>
          </div>
          <div className="app__wrapper_info">
            <h3 className="app__shop-menu-h3">Drink & Pizza</h3>
            <div className="app__subMenu-drinks">
              {cocktails.map((win, index) => {
                return (
                  <BookMenu
                    key={win.title + index}
                    title={win.title}
                    tags={win.tags}
                    price={win.price}
                    img={win.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
