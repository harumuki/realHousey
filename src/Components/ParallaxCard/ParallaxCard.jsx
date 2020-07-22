import React from "react";
import "./ParallaxCard.scss";
import TableCard from "../TableCard/TableCard";
import ContactDetailsCard from "../ContactDetailsCard/ContactDetailsCard";
import InnerCard from "../InnerCard/InnerCard";
import { HouseContext } from "../../Context";
import img from "../../External/house-images/house2.jpg";

const ParallaxCard = ({ house }) => {
  const {
    haffStartAddress,
    haffEndAddress,
    mo,
    price,
    year,
    tax,
    land,
    improvements,
    total,
    nameR,
    imgR,
    mobileNum,
    licenseNum,
    email,
    description,
    beds,
    baths,
    Sqft,
    images,
  } = house;
  return (
    <div>
      <div className="parallaxx-card--box_con-1">
        <InnerCard
          title={haffStartAddress}
          subTitle={haffEndAddress}
          beds={beds}
          baths={baths}
          Sqft={Sqft}
        />
        <InnerCard
          title={price}
          subTitle={mo}
          beds={beds}
          baths={baths}
          Sqft={Sqft}
        />
      </div>
      <div className="parallaxx-card--box_con-2">
        <TableCard
          year={year}
          tax={tax}
          land={land}
          improvements={improvements}
          total={total}
        />
        <ContactDetailsCard
          name={nameR}
          img={imgR}
          mobileNum={mobileNum}
          licenseNum={licenseNum}
          email={email}
          description={description}
        />
      </div>
    </div>
  );
};

export default ParallaxCard;
