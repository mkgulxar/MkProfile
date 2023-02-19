import React from "react";
import aboutusimg from "../images/girl-image.png";
import "../Pages/Aboutus.css";

function Aboutus() {
  return (
    <>
      <div className="aboutus-flex">
        <div className="aboutus-img">
          <img src={aboutusimg} alt="" />
        </div>
        <div>
          <div className="aboutus-text">
            <h2>Testimonials About Us</h2>
            <p>
              In the smallest case we alwaysgive your best, find out what other
              user have to say about us
            </p>
          </div>
          <div className="about-box">
            <p>
              "Eatly really helps me to maintain food intake, is perfect for
              those of you who want to diet or just make the body more healthy.
              In addition Eatly helped me to create a menu that is suitable for
              the family"
            </p>
            <h5>Rara Sanchez</h5>
            <h6> Freelancer</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
