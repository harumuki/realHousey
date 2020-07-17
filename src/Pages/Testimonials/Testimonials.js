import React from "react";
import "./Testimonials.scss";

import Content from "../../Components/Content-Container/Content";
import Testimonial from "../../Components/Testimonial/Testimonial";

import img1 from "../../External/img/boy1.jpg";
import img2 from "../../External/img/boy.jpg";
import icon from "../../External/icons/test.svg";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-top">
        <Content
          heading1="Works"
          heading2="How It Works"
          para="Our extensive network in the global real estate market allows us to locate the best properties for investment."
          mTop="yes"
        />
      </div>
      <div className="testimonials-box">
        <Testimonial
          description="I can't believe it! We fired our last agent and hired you because we heard you were the best of the best! Well, you did it! You sold my home in 7 days after the other agent tried for 6 months! We would recommend you to anyone!"
          title="Jeff"
          subTitle="Charlotte, NC"
          img={img1}
          icon={icon}
        />
        <Testimonial
          description="I can't believe it! We fired our last agent and hired you because we heard you were the best of the best! Well, you did it! You sold my home in 7 days after the other agent tried for 6 months! We would recommend you to anyone!"
          title="Jeff"
          subTitle="Charlotte, NC"
          img={img2}
          icon={icon}
        />
      </div>
    </div>
  );
};

export default Testimonials;
