import React, { useRef, useState } from "react";
import "./Intro.css";
import { meal } from "../../constants";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
export const Intro = () => {
  const videoRef = useRef(null);
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="app__intro app__bg">
      <video
        src={meal}
        controls={false}
        loop
        muted
        ref={videoRef}
        type="video/mp4"
      />
      <div className="app__intro-custom-controls flex__center">
        <div className="flex__center">
          {playVideo ? (
            <BsPauseFill
              color="var(--color-white)"
              cursor={"pointer"}
              fontSize={50}
              onClick={() => {
                setPlayVideo(false);
                videoRef.current.pause();
              }}
            />
          ) : (
            <BsFillPlayFill
              color="var(--color-white)"
              cursor={"pointer"}
              fontSize={50}
              onClick={() => {
                setPlayVideo(true);
                videoRef.current.play();

              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
