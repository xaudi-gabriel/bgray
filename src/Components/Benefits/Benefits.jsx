import React from "react";
import "./Benefits.css";
import benefit_img_1 from "../../assets/benefits-img-1.png";
import benefit_img_2 from "../../assets/benefits-img-2.png";
import benefit_img_3 from "../../assets/benefits-img-3.png";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefit">
        <img src={benefit_img_1} alt="" />
        <div className="caption">
          <h1>Environmental</h1>
          <p>
            Solar panels reduce your carbon footprint by harnessing renewable
            energy, decreasing reliance on fossil fuels
          </p>
        </div>
      </div>
      <div className="benefit">
        <img src={benefit_img_2} alt="" />
        <div className="caption">
          <h1>Financial</h1>
          <p>Solar panels can significantly lower electricity bills</p>
        </div>
      </div>
      <div className="benefit">
        <img src={benefit_img_3} alt="" />
        <div className="caption">
          <h1>High quality and practical products</h1>
          <p>
            Solar panels increase home value and provide energy independence,
            ensuring power availability during outages
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
