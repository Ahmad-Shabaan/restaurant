import React from "react";
// import { images } from "../../constants";
import { cocktails } from "../../constants/data";
import { wines } from "../../constants/data";
import { Link } from "react-router-dom";
import "./BookTable.css";
import { BookMenu } from "../../components/BookMenu/BookMenu";
export const BookTable = ({ handleLogoutRef }) => {
  // const drinks = [images.drink01 , images.drink02 , images.drink03 , images.drink04 , images.drink05 , images.drink06];
  // const burgers = [images.burger01 , images.burger02, images.burger03 , images.burger04 , images.burger05 , images.burger06]

  return (
    <div className="app__shop-menu section__padding app__bg">
      <div className="app__shop-menu_nav">
        <Link to={"/"} className="p__openSans">
          Home
        </Link>
        <div />
        <Link
          to={"/"}
          className="p__openSans"
          onClick={() => {
            handleLogoutRef();
          }}
        >
          logout
        </Link>
      </div>
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
  );
};
