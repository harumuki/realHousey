import React from "react";
import "./Heading.style.scss";

const Heading = ({ children, heading }) => {
  return <div className={heading}>{children}</div>;
};

Heading.defaultProps = {
  heading: "heading1",
};

export default Heading;
