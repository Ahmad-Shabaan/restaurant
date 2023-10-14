import React, { useRef } from "react";
import "./Gallery.css";
import { images } from "../../constants";
import { SubHeading } from "./../../components/SubHeading/SubHeading";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
export const Gallery = () => {
  const slideRef = useRef(null);
  const galleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
    images.drink01,
    images.drink04,
    images.burger01,
    images.burger04
  ];
  const handleRightClick = () => {
    slideRef.current.scrollLeft += 300;
  };

  const handleLeftClick = () => {
    slideRef.current.scrollLeft -= 300;
  };
  return (
    <div className="app__gallery app__bg section__padding" id="blog">
      <div className="app__overlay"></div>
      <div className="app__gallery-content">
        <SubHeading title={"Instagram"}  />
        <div className="header-text__cormorant">photo gallery</div>
        <div className="p__openSans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, culpa
          veniam. Excepturi amet possimus, praesentium rem, quo debitis facilis
        </div>
        <button className="app__gallery-button custom__button">
          view more
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container " ref={slideRef}>
          {galleryImages.map((img, index) => {
            return (
              <div
                className="app__gallery-images_img"
                key={`gallery ${index + 1}`}
              >
                <img src={img} alt="" />
                <BsInstagram className="app__gallery-images_icon" />
              </div>
            );
          })}
        </div>
        <div className="app__gallery-images_arrows">
          <div className="gallery__arrows-icon flex__center">
            <BsArrowLeftShort onClick={handleLeftClick} />
          </div>
          <div className="gallery__arrows-icon flex__center">
            <BsArrowRightShort onClick={handleRightClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
