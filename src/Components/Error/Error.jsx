import React from "react";
import { Link } from "react-router-dom";

import "./Error.style.scss";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const Error = () => {
  return (
    <div className="error-box">
      <Heading>Oops! Page not found!</Heading>
      <Link to="/">
        <Button>Return Home</Button>
        <span className="circle big"></span>
        <span className="circle med"></span>
        <span className="circle small"></span>
      </Link>

      {/* <div id="not-found">
        <div id="title">Simple Pure CSS3 &bull; 404 Error Page</div>
          <div className="circles">
            <p>404<br />
            <small>PAGE NOT FOUND</small>
            </p>
            <span className="circle big"></span>
            <span className="circle med"></span>
            <span className="circle small"></span>
          </div>
      </div> */}
    </div>
  );
};

export default Error;
