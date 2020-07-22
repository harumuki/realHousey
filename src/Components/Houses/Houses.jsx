import React, { useState } from "react";
import PropTypes from "prop-types";

import ListItemCard from "../ListItemCard/ListItemCard";

// import img1 from "../../External/house-images/house.jpg";
// import img2 from "../../External/house-images/house4.jpg";
// import img3 from "../../External/house-images/house3.jpg";

import defaultImg from "../../External/house-images/house14.jpg";
import { Link } from "react-router-dom";

const Houses = ({ house }) => {
  // console.log(house);

  const {
    name,
    type,
    images,
    price,
    haffEndAddress,
    slug,
    beds,
    baths,
    Sqft,
  } = house;
  return (
    <div className="featured-box">
      {/* <div className="featured-sub-box"> */}
      <Link to={`/houses/${slug}`}>
        <ListItemCard
          image={images[0] || defaultImg}
          title={name}
          subTitle={haffEndAddress}
          price={price}
          bd={beds}
          ba={baths}
          sqft={Sqft}
        />
      </Link>
      {/* </div> */}
    </div>
  );
};

Houses.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.string.isRequired,
    usState: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Houses;
