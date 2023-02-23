import React from "react";
import "../Pages/HealthyMenu.css";
import { AiFillClockCircle } from "react-icons/ai";
import { Scrollbars } from "react-custom-scrollbars-2";
import foodimg from "../images/Food-Pyramids-new-.png";



function HealthyMenu() {
  return (
    <>
    <div className="healthy-img-text-flex">
        <div>
      <div className="healthy-menu-text">
        <h2>Try Our Healthy Menu</h2>
        <p>
          We provide a varity of healthy recipes that have been curated by our
          best nutritionists for you
        </p>
      </div>
      
      <Scrollbars style={{ width: 450, height: 355 }}>
        <div className="healthy-menu-box menu-flex">
          <div className="healthy-icons">
            <AiFillClockCircle
              style={{
                fontSize: "40px",
                border: "3px solid rgb(167, 132, 202)",
                color: "var(--text1-color)",
                background: " #944cde",
                borderRadius: "15px",
                padding: "8px",
              }}
            />
          </div>
          <div className="healthy-text">
            <h5>Breakfast Recipes</h5>
          </div>
        </div>
        <div className="healthy-menu-box menu-flex">
          <div className="healthy-icons">
            <AiFillClockCircle
              style={{
                fontSize: "40px",
                border: "3px solid rgb(167, 132, 202)",
                color: "var(--text1-color)",
                background: " #944cde",
                borderRadius: "15px",
                padding: "8px",
              }}
            />
          </div>
          <div className="healthy-text">
            <h5>Breakfast Recipes</h5>
          </div>
        </div>
        <div className="healthy-menu-box menu-flex">
          <div className="healthy-icons">
            <AiFillClockCircle
              style={{
                fontSize: "40px",
                border: "3px solid rgb(167, 132, 202)",
                color: "var(--text1-color)",
                background: " #944cde",
                borderRadius: "15px",
                padding: "8px",
              }}
            />
          </div>
          <div className="healthy-text">
            <h5>Breakfast Recipes</h5>
          </div>
        </div>
        <div className="healthy-menu-box menu-flex">
          <div className="healthy-icons">
            <AiFillClockCircle
              style={{
                fontSize: "40px",
                border: "3px solid rgb(167, 132, 202)",
                color: "var(--text1-color)",
                background: " #944cde",
                borderRadius: "15px",
                padding: "8px",
              }}
            />
          </div>
          <div className="healthy-text">
            <h5>Breakfast Recipes</h5>
          </div>
        </div>
        <div className="healthy-menu-box menu-flex">
          <div className="healthy-icons">
            <AiFillClockCircle
              style={{
                fontSize: "40px",
                border: "3px solid rgb(167, 132, 202)",
                color: "var(--text1-color)",
                background: " #944cde",
                borderRadius: "15px",
                padding: "8px",
              }}
            />
          </div>
          <div className="healthy-text">
            <h5>Breakfast Recipes</h5>
          </div>
        </div>
      </Scrollbars>
      </div>
     <div className="healthy-red-flex">
     <div className="healthy-img-flex">
        <div className="healthy-image">
          <img src={foodimg} alt="" />
        </div>
        <div className="healthy-img-text">
          <h5>
            Red Onions with<br></br>chopped cabbage
          </h5>
          <div className="healthy-btn">
            <button>Try Now</button>
          </div>
        </div>
      </div> <div className="healthy-img-flex">
        <div className="healthy-image">
          <img src={foodimg} alt="" />
        </div>
        <div className="healthy-img-text">
          <h5>
            Red Onions with<br></br>chopped cabbage
          </h5>
          <div className="healthy-btn">
            <button>Try Now</button>
          </div>
        </div>
      </div>
     </div>
     </div>
    </>
  );
}

export default HealthyMenu;
