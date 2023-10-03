import React from "react";
import "./SubMenu.css"
export const SubMenu = ({title , price , tags}) => {
  return (
    <div className="app__subMenu">
      <div className="app__subMenu-item">
        <h4 className="p__cormorant">{title}</h4>
        <div>
          <span />
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <p className="p__openSans">{tags}</p>
    </div>
  );
};
