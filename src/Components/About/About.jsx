import React from "react";
import "./About.css";
import play_icon from "../../assets/play-icon.png";
import about_img from "../../assets/about.jpg";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>

      <div className="about-right">
        <h1>ABOUT US</h1>
        <p>
          <br />
          We are dedicated to harnessing the power of the sun to create
          sustainable, energy-efficient solutions for your home and business.
        </p>
        <p>
          <br />
          Specializing in top-quality solar panels and innovative solar lighting
          systems, our mission is to help you reduce energy costs, lower your
          carbon footprint, and enhance your property’s value.
        </p>
        <p>
          <br />
          With a commitment to excellence and customer satisfaction, we deliver
          tailored solutions that maximize efficiency and support a greener
          future.
        </p>
      </div>
    </div>
  );
}

export default About;
