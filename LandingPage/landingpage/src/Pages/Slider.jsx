import React from "react";
import "../Pages/Slider.css";
import { GiChefToque } from "react-icons/gi";

function Slider() {
  return (
    <>
      <div className="maxWidth">
        <div className="best-slider-text">
          <h2>Our Best Programs</h2>
        </div>
        <div className="box-flex">
          <div className="box-color">
            <div className="box-background box-radius-1 ">
              <div className="box-icons">
                <GiChefToque />
              </div>
              <div className="box-text">
                <h2>Healthy Recipe</h2>
                <p>Healthier Recipes, from food & nutriion experts</p>
              </div>
            </div>
          </div>
          <div className="box-color">
            <div className="box-background ">
              <div className="box-icons">
                <GiChefToque />
              </div>
              <div className="box-text">
                <h2>Healthy Recipe</h2>
                <p>Healthier Recipes, from food & nutriion experts</p>
              </div>
            </div>
          </div>
          <div className="box-color">
            <div className="box-background ">
              <div className="box-icons">
                <GiChefToque />
              </div>
              <div className="box-text">
                <h2>Healthy Recipe</h2>
                <p>Healthier Recipes, from food & nutriion experts</p>
              </div>
            </div>
          </div>
          <div className="box-color">
            <div className="box-background box-radius-2 ">
              <div className="box-icons">
                <GiChefToque />
              </div>
              <div className="box-text">
                <h2>Healthy Recipe</h2>
                <p>Healthier Recipes, from food & nutriion experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
