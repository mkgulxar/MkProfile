import React from "react";
import "./savetime.css";
import saveimg from "./Image/Bulbe Men.png";

const Savetime = () => {
  return (
    <>
      <div className="Savecontainer">
        <div className="saveimage">
          <img src={saveimg} alt="" />
        </div>
        <div className="savetext">
          <h4>SAVE TIME</h4>
          <h1>SAVE MONEY</h1>
          <h4>do it your way.</h4>
          <p>the way to make a brand like a new generation</p>
          <div className="inputbtn">
          <input type="text" name="Email" placeholder="share your email" />
          <button>SEND</button>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Savetime;
