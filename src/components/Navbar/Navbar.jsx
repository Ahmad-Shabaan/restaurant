import React, { useContext, useState } from "react";
import images from "../../constants/images";
import { scroller } from "react-scroll";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { DataContext } from "../../App";
const Navbar = () => {
  const scrollOptions = {
    duration: 800,
    offset: -50,
    smooth: "easeInOutCubic",
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  const { isUser, handleLogout } = useContext(DataContext);
  return (
    <nav className="app__nav " id="myNav">
      <div className="app__nav-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__nav-links">
        <li className="p__openSans">
          <a onClick={() => scroller.scrollTo("home", scrollOptions)}>home</a>
        </li>
        <li className="p__openSans">
          <a onClick={() => scroller.scrollTo("about", scrollOptions)}>about</a>
        </li>
        <li className="p__openSans">
          <a onClick={() => scroller.scrollTo("contact", scrollOptions)}>
            contact us
          </a>
        </li>
        <li className="p__openSans">
          <a onClick={() => scroller.scrollTo("blog", scrollOptions)}>blog</a>
        </li>
        <li className="p__openSans">
          <a onClick={() => scroller.scrollTo("landing", scrollOptions)}>
            landing
          </a>
        </li>
      </ul>

      <div className="app__nav-login">
        {isUser ? (
          <Link
            to={"/"}
            className="p__openSans"
            onClick={() => {
              handleLogout();
            }}
          >
            logout
          </Link>
        ) : (
          <Link to={"/login"} className="p__openSans">
            login/signUp
          </Link>
        )}
        <div />
        <Link to={"/book_table"} className="p__openSans">
          book table
        </Link>
      </div>

      <div className="app__nav-smallScreen">
        {/* <CiUser color="#fff" fontSize={23} cursor={'pointer'} style={{marginRight:"10px"}}/> */}
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
                <a
                  onClick={() => {
                    setToggleMenu(false);
                    scroller.scrollTo("home", scrollOptions);
                  }}
                >
                  home
                </a>
              </li>
              <li className="p__openSans">
                <a
                  onClick={() => {
                    setToggleMenu(false);
                    scroller.scrollTo("about", scrollOptions);
                  }}
                >
                  about
                </a>
              </li>
              <li className="p__openSans">
                <a
                  onClick={() => {
                    setToggleMenu(false);
                    scroller.scrollTo("contact us", scrollOptions);
                  }}
                >
                  contact us
                </a>
              </li>
              <li className="p__openSans">
                <a
                  onClick={() => {
                    setToggleMenu(false);
                    scroller.scrollTo("blog", scrollOptions);
                  }}
                >
                  blog
                </a>
              </li>
              <li className="p__openSans">
                <a
                  onClick={() => {
                    setToggleMenu(false);
                    scroller.scrollTo("landing", scrollOptions);
                  }}
                >
                  landing
                </a>
              </li>
              <li className="p__openSans">
                {/* <Link
                  to={isUser ? "/login" : "/"}
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {isUser ? (
                    <p>
                      Login <CiUser fontSize={23} />
                    </p>
                  ) : (
                    <p>
                      Logout <HiOutlineLogout fontSize={23} />
                    </p>
                  )}
                </Link> */}

                {isUser ? (
                  <Link
                    to={"/"}
                    onClick={() => {
                      setToggleMenu(false);
                      handleLogout();
                    }}
                  >
                    Logout&nbsp;<HiOutlineLogout fontSize={23} />
                  </Link>
                ) : (
                  <Link
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                    to={"/login"}
                  >
                    Login/Signup&nbsp;<CiUser fontSize={23} />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
