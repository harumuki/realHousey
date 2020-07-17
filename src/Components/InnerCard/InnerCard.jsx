import React from "react";
import "./InnerCard.scss";

import icon1 from "../../External/icons/bed.svg";
import icon2 from "../../External/icons/basin.svg";
import icon3 from "../../External/icons/angle.svg";

const InnerCard = ({ title, subTitle }) => {
  return (
    <div className="inner-card-boxx">
      <div className="inner-card-box">
        <div className="inner-card-box-inner">
          <h2 className="inner-card-title">{title}</h2>
          <h2 className="inner-card-subTitle">{subTitle}</h2>
          <div className="inner-card-icon-box">
            <div className="inner-card-box1">
              <img src={icon1} alt="" />
              <p>4 Beds</p>
            </div>
            <div className="inner-card-box2">
              <img src={icon2} alt="" />
              <p>3</p>
              <p>Baths</p>
            </div>
            <div className="inner-card-box3">
              <img src={icon3} alt="" />
              <p>1,440</p> 
              <p>sqft</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerCard;
