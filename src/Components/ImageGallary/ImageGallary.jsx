import React from "react";
import "./ImageGallary.scss";

const ImageGallary = ({ mainImage, img1, img2, img3, img4 }) => {
  const SmallBox = {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    // left: 1300,
    // top: 670,
  };
  const SmallBoxIndeve1 = {
    // left: 1300,
  };
  const SmallBoxIndeve2 = {
    // left: 1500,
  };
  return (
    <div className="image-gallary-container">
      <img className="image-gallary-main" src={mainImage} alt="main-image" />

      <div className="image-gallary-box--container">
        <div
          className="image-gallary-box1"
          style={{ SmallBox, SmallBoxIndeve1 }}
        >
          <img src={img1} alt="image" />
          <img src={img2} alt="image" />
        </div>
        <div
          className="image-gallary-box2"
          style={{ SmallBox, SmallBoxIndeve2 }}
        >
          <img src={img3} alt="image" />
          <img src={img4} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallary;
