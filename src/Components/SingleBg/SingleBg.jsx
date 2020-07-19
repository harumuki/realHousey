import React from "react";
import "./SingleBg.scss";
import { render } from "react-dom";

import "./SingleBg.scss";
import { HouseContext } from "../../Context";
// import { Link } from "react-scripts";
import ImageGallary from "../ImageGallary/ImageGallary";
import InnerCard from "../InnerCard/InnerCard";

import img1 from "../../External/house-images/house11.jpg";
import img2 from "../../External/house-images/house2.jpg";
import img3 from "../../External/house-images/house3.jpg";
import img4 from "../../External/house-images/house4.jpg";
import img5 from "../../External/house-images/house5.jpg";
import TableCard from "../TableCard/TableCard";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";

const SingleBg = ({ img, house }) => {
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    brackfast,
    pets,
    images,
  } = house;
  return (
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
        <p className="parallaxx__box--address">9685 Denhart Ave</p>
        <p>California City, CA 93505</p>
      </div>
      <div className="parallaxx__box">
        <div className="parallaxx__card">
          <ImageGallary
            mainImage={img1}
            img1={img2}
            img2={img3}
            img3={img4}
            img4={img5}
          />
        </div>
        {/* <div className="parallaxx---box-2">  */}
        <div className="parallaxx-card2">
          <InnerCard
            title="9685 Denhart Ave"
            subTitle="California City, CA 93505"
          />
        </div>
        <div className="parallaxx-card3">
          <InnerCard
            title="$2,199,950
              "
            subTitle="Est. Mortgage $8,962/mo"
          />
        </div>
        <div className="parallaxx-card4">
          <TableCard
            year="2019"
            tax="	$16,711"
            land="$948,500"
            improvements="$406,500"
            total="$1,355,000"
          />
        </div>
        <div className="parallaxx-card5">
          <ContactDetailsCard
            name="Alana Lam"
            mobileNum="(408) 981-6012"
            licenseNum="01049403"
            email="alana.realabode@gmail.com"
            description="MLS Disclaimer: Property Information © 2020 MLSListings Inc. All rights reserved. Certain information contained herein is derived from information which is the licensed property of, and copyrighted by, MLSListings Inc."
          />
        </div>
      </div>
    </div>
  );
};

export default SingleBg;
