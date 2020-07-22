import React from "react";
import { useContext } from "react";

import "./HouseSearchFilter.scss";
import { HouseContext } from "../../Context";
import Heading from "../Heading/Heading";
import Content from "../Content-Container/Content";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const HouseSearchFilter = ({ houses }) => {
  const context = useContext(HouseContext);
  const {
    handleChange,
    type,
    usState,
    priceNum,
    minPriceNum,
    maxPriceNum,
    beds,
    baths,
    minSqftNum,
    maxSqftNum,
  } = context;

  // get unique types
  let types = getUnique(houses, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  // get unique types
  let usStates = getUnique(houses, "usState");
  // add all
  usStates = ["all", ...usStates];
  // map to jsx
  usStates = usStates.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let cushan = getUnique(houses, "beds");
  // cushan = ["all", ...cushan];
  cushan = cushan.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let tol = getUnique(houses, "baths");
  // tol = ["all", ...tol];
  tol = tol.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section>
      {/* <Heading>Search Houses</Heading> */}
      <Content heading1="Search" heading2="Search Houses" mTop="yes" />
      <form action="">
        {/* select type */}
        <div className="house-search-filter-container">
          <label htmlFor="type">House Type</label>
          <select name="type" id="type" value={type} onChange={handleChange}>
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select usState */}
        <div className="house-search-filter-container">
          <label htmlFor="usState">House State</label>
          <select
            name="usState"
            id="usState"
            value={usState}
            onChange={handleChange}
          >
            {usStates}
          </select>
        </div>
        {/* end select usState */}
        {/* select beds */}
        <div className="house-search-filter-container">
          <label htmlFor="beds">House Beds</label>
          <select name="beds" id="beds" value={beds} onChange={handleChange}>
            {cushan}
          </select>
        </div>
        {/* end select beds */}
        {/* select beds */}
        <div className="house-search-filter-container">
          <label htmlFor="baths">House Baths</label>
          <select name="baths" id="baths" value={baths} onChange={handleChange}>
            {tol}
          </select>
        </div>
        {/* end select beds */}
        {/* select priceNum */}
        <div className="house-search-filter-container">
          <label htmlFor="priceNum">House Price ${priceNum}</label>
          <input
            type="range"
            name="priceNum"
            min={minPriceNum}
            max={maxPriceNum}
            id="priceNum"
            value={priceNum}
            onChange={handleChange}
            className=""
          />
        </div>
        {/* end select priceNum */}
        {/* SqftNum */}
        <div className="">
          <label htmlFor="SqftNum">House Sqft</label>
          <div className="">
            <input
              type="number"
              name="minSqftNum"
              id="SqftNum"
              value={minSqftNum}
              onChange={handleChange}
              className=""
            />
            <input
              type="number"
              name="maxSqftNum"
              id="SqftNum"
              value={maxSqftNum}
              onChange={handleChange}
              className=""
            />
          </div>
        </div>
        {/* end SqftNum */}
        {/*ChackBox */}
        {/* <div className="">
          <input type="chackbox" name="breakfast" id="breack" />
        </div> */}
        {/* end ChackBox */}
      </form>
    </section>
  );
};

export default HouseSearchFilter;
