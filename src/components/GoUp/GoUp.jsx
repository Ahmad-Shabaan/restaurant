import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import {BsArrowUpCircleFill} from "react-icons/bs"
export const GoUp = () => {
  const [showGoUp, setShowGoUp] = useState(false);
  const scrollOptions = {
    duration: 800,
    offset: 0,
    smooth: "easeInOutCubic",
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowGoUp(true);
      } else {
        setShowGoUp(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showGoUp && (
        <div
        className="flex__center"
          style={{
            position: "fixed",
            right: "20px",
            top: "85vh",
            width:"34px",
            height:"34px",
            borderRadius:'50%',
            backgroundColor: "black",
            color:"var(--color-golden)",
            zIndex: "100",
        }}
        >
          <a className="flex__center"
          onClick={() => scroller.scrollTo("myNav", scrollOptions)}><BsArrowUpCircleFill  fontSize={35} cursor={"pointer"}/></a>
        </div>
      )}
    </>
  );
};
