import React from "react";
import "./Banner.css";

import pic1 from "./Image/team.png";

export const Banner = () => {
  return (
    <>
    <div className="banner">
      <div className="Section">
        <div className="Heading">
          <h1>BRANDING</h1>
          <h3>unique and recognizable</h3>
          <p>
            Identity that align with your business needs and are recognizable as
            “yours”. Essentially, these graphics will contains all the feature
            elements that are unique and recognizable for your business
          </p>
        </div>
        <div className="bannerimage">
        <img src={pic1} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
