import React from "react";
import "./Testimonials.scss";

import Content from "../../Components/Content-Container/Content";
import Testimonial from "../../Components/Testimonial/Testimonial";

import img1 from "../../External/img/boy1.jpg";
import img2 from "../../External/img/girl-3-mode.jpg";
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
          description="At the end of the day, realhousey was an essential part in making sure I was able to get the price I needed. I was able to receive the best value from my home. He is not only knowledgeable about the real estate market but has a realistic view of it and his experience, advice, and wisdom made the ups and downs of selling a home easier."
          title="Aryan"
          subTitle="Orem, Utah"
          img={img2}
          icon={icon}
        />
      </div>
    </div>
  );
};

export default Testimonials;
