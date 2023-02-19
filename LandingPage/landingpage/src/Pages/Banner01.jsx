import React from "react";
import { RiFlagFill } from "react-icons/ri";
import "../Pages/Banner01.css";

function Banner01() {
  return (
    <>
      <div className="banner01bg">
        <div>
          <RiFlagFill style={{fontSize:"45px" ,border:"1px solid #fff",color: "var(--logo-color)",background:" #944cde",borderRadius:"15px",padding:"10px",marginBottom:"20px" }} />
        </div>
        <div className="banner01-text">
          <h2>
            Get Started with <span>Eatly</span>
          </h2>
          <p>
            Discover tips & news for your health from experts and get the best
            discounts by getting started
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Banner01;
