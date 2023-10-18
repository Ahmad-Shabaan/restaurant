import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import "./Loading.css";
export const Loading = ({ numOfImg }) => {
  const divElements = Array.from({ length: numOfImg }, (_, k) => {
    return (
      <div key={k}>
        <BsFillImageFill />
      </div>
    );
  });
  return (
    <div className="app__loading">
      <div className="app__loading-imgHolder">{divElements}</div>
      <div className="app__loading-infoHolder">
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
