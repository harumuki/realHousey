import React from "react";
import "./Card.scss";

const Card = ({ title, location, description }) => {
  return (
    <div className="whole-contenter1">
      <div className="property-card1">
        <img className="property-image1" src={location} alt="React Logo" />
        {/* {children} */}
        {/* <div class="property-description"> */}
        <h5> {title} </h5>
        <p>{description}</p>
        {/* </div> */}

        {/* <div class="property-social-icons"></div> */}
      </div>
    </div>
  );
};

export default Card;
