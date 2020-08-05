import React from "react";
import "./SingleBg.scss";
import { render } from "react-dom";

import "./SingleBg.scss";
import { HouseContext } from "../../Context";
// import { Link } from "react-scripts";
import ImageGallary from "../ImageGallary/ImageGallary";

import img1 from "../../External/house-images/house11.jpg";
import img2 from "../../External/house-images/house2.jpg";
import img3 from "../../External/house-images/house3.jpg";
import img4 from "../../External/house-images/house4.jpg";
import img5 from "../../External/house-images/house5.jpg";

import ParallaxCard from "../ParallaxCard/ParallaxCard";

const SingleBg = ({ img, house }) => {
  const { name, haffStartAddress, haffEndAddress, images } = house;
  return (
    <div className="nav-background-color-Container">
      <div className="nav-background-color"></div>
      <div className="parallaxx__imagee">
        <div
          style={{
            backgroundImage: `url(${images[0]})`,
            filter: "brightness(0.8)",
          }}
          className="parallaxx__image--container"
        ></div>
        <div className="parallaxx__inner--box">
          <h2>{name}</h2>
          <p className="parallaxx__box--address">{haffStartAddress}</p>
          <p>{haffEndAddress}</p>
        </div>
        <div className="parallaxx__box">
          <div className="parallaxx__card">
            <ImageGallary
              mainImage={images[0]}
              img1={img2}
              img2={img3}
              img3={img4}
              img4={img5}
            />
          </div>
          {/* <div className="popup-click" onChange={item => console.log("popup-clicked")}></div> */}
          {/* <div className="parallaxx---box-2">  */}
          <div className="parallaxx__card-2">
            <ParallaxCard house={house} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBg;
