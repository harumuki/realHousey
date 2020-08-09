import React, { useState } from "react";
import "./ImageGallary.scss";

import SimpleImageSlider from "react-simple-image-slider";
import icon from "../../External/icons/close.svg";

const ImageGallary = ({ mainImage, img1, img2, img3, img4 }) => {
  const [openGallary, setopenGallary] = useState(false);

  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
    },
    // { url: "./images/qu1.jpg" },
    // { url: "./images/qu1.jpg" },
    // { url: "./images/qu1.jpg" },
  ];

  const SmallBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  };

  return (
    <>
      <div className="image-gallary-container">
        <img className="image-gallary-main" src={mainImage} alt="main-image" />
        <div className="image-gallary-box--container">
          <div className="image-gallary-box1" style={{ SmallBox }}>
            <img src={img1} alt="image" />
            <img src={img2} alt="image" />
          </div>
          <div className="image-gallary-box2" style={{ SmallBox }}>
            <img src={img3} alt="image" />
            <img
              src={img4}
              alt="image"
              className="popup-button"
              onClick={() => setopenGallary(true)}
            />
          </div>
        </div>
      </div>
      {/* popup */}
      {openGallary && (
        <div className="popup-slider">
          <div className="image-popup-box">
            <SimpleImageSlider
              width={"150rem"}
              height={"80rem"}
              images={images}
            />
            <img
              src={icon}
              alt="social link"
              onClick={() => setopenGallary(false)}
              className="close-gallary"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallary;
