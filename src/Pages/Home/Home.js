import React from "react";
import "./Home.style.scss";

import Main from "../../Components/Main/Main.Component";
import AboutUs from "../../Components/AboutUs/AboutUs";
import SmallCards from "../SmallCards/Cards";
import Works from "../Works/HowItWorks";
import Cards from "../Cards/Cards";
import RecentListItem from "../RecentListItem/RecentListItem";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../../Components/Footer/Footer";
import ImageGallary from "../../Components/ImageGallary/ImageGallary";

import img1 from "../../External/house-images/house11.jpg";
import img2 from "../../External/house-images/house2.jpg";
import img3 from "../../External/house-images/house3.jpg";
import img4 from "../../External/house-images/house4.jpg";
import img5 from "../../External/house-images/house5.jpg";

function Home() {
  return (
    <div className="home-full-hight">
      <div className="home-main-content">
        <Main />
        <AboutUs />
        <SmallCards />
        <Works />
        <Cards />
        <RecentListItem />
        <Testimonials />
        <ImageGallary
          mainImage={img1}
          img1={img2}
          img2={img3}
          img3={img4}
          img4={img5}
        />
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
