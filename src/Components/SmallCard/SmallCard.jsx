import React from "react";
import "./SmallCard.scss";

const SmallCard = ({ title, location }) => {
  return (
    <div className="whole-contenter">
      <div className="property-card">
        <img className="property-image" src={location} alt="React Logo" />
        {/* {children} */}
        {/* <div class="property-description"> */}
        <h5> {title} </h5>
        {/* <p>{description}</p> */}
        {/* </div> */}

        {/* <div class="property-social-icons"></div> */}
      </div>
    </div>
  );
};

export default SmallCard;
