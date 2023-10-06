import React, { useState } from "react";
import images from "../../constants/images";

import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__nav ">
      <div className="app__nav-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__nav-links">
        <li className="p__openSans">
          <a href="#home">home</a>
        </li>
        <li className="p__openSans">
          <a href="#about">about</a>
        </li>
        <li className="p__openSans">
          <a href="#contact">contact us</a>
        </li>
        <li className="p__openSans">
          <a href="#blog">blog</a>
        </li>
        <li className="p__openSans">
          <a href="#landing">landing</a>
        </li>
      </ul>

      <div className="app__nav-login">
        <a className="p__openSans" href="login">
          login/signUp
        </a>
        <div />
        <a className="p__openSans" href="/">
          book table
        </a>
      </div>

      <div className="app__nav-smallScreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
          cursor={"pointer"}
        />
        {toggleMenu && (
          <div className="app__nav-smallScreen_overlay flex__center slide-bottom ">
            <MdOutlineRestaurantMenu
              className="overlay__close"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__nav-smallScreen-links flex__center">
              <li className="p__openSans">
                <a href="#home">home</a>
              </li>
              <li className="p__openSans">
                <a href="#about">about</a>
              </li>
              <li className="p__openSans">
                <a href="contactUs">contact us</a>
              </li>
              <li className="p__openSans">
                <a href="#blog">blog</a>
              </li>
              <li className="p__openSans">
                <a href="#landing">landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
