import React, { useState } from "react";
import "./savetime.css";
import saveimg from "./Image/Bulbe Men.png";
import { Email } from "./pages/Email";






const Savetime = () => {
  const [model, setModel] = useState(false);

  const toggleModle = () => {
    setModel(!model);
  };
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
          <button >share your details</button>
          <Email/>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Savetime;
