import React from "react";
import Heading from "../Heading/Heading";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="loader-heading">
        <Heading heading="heading3">Houses Data Loading...</Heading>
      </div>

      {/* <!-- Loading square for squar.red network --> */}
      <span className="loader">
        <span className="loader-inner"></span>
      </span>
    </div>
  );
};

export default Loading;
