import React from "react";
import "./Hero.css";
import explore_more_arrow from "../../assets/explore-more-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Your lighting specialist</h1>
        <p>
          We specializes in energy saving and cost reducing lights. We also have
          complete Solar power system.
        </p>
        <button className="btn">
          Explore more <img src={explore_more_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
