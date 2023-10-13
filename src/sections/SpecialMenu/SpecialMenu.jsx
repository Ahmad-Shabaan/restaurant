import React from "react";
import { images } from "../../constants";
import {cocktails} from "../../constants/data"
import {wines} from "../../constants/data"

import "./SpecialMenu.css";
import { SubHeading } from "../../components/SubHeading/SubHeading";
import { SubMenu } from "../../components/SubMenu.jsx/SubMenu";
export const SpecialMenu = () => {
  return (
    <div className="app__special-menu section__padding app__bg">
      <SubHeading
        title={"Menu that fits you ~"}
      />
      <h2 className="app__special-menu-h2 header-text__cormorant">
        Today’s Special
      </h2>
      <div className="app__special-menu-wrapper">
        <div className="app__wrapper_info">
          <h3 className="app__special-menu-h3">Sandwiches & Burger</h3>
          {wines.map((win, index) => {
            return (
              <SubMenu
                key={win.title + index}
                title={win.title}
                tags={win.tags}
                price={win.price}
              />
            );
          })}
        </div>
        <div className="app__special-menu-img">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__wrapper_info">
          <h3 className="app__special-menu-h3">Drink & Pizza</h3>
          {cocktails.map((win, index) => {
            return (
              <SubMenu
                key={win.title + index}
                title={win.title}
                tags={win.tags}
                price={win.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
