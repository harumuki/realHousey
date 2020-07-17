import React, { Component } from "react";
import { Link } from "react-router-dom";
import { HouseContext } from "../../Context";
import "./SingleHouse.scss";
import SingleBg from "../../Components/SingleBg/SingleBg";
import img1 from "../../External/house-images/house11.jpg";

export default class SingleHouse extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div>
        {" "}
        <SingleBg img={img1} className="single-house-img" />{" "}
      </div>
    );
  }
}
