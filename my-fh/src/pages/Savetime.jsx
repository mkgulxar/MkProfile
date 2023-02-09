import React, { useRef, useState } from "react";
import "./savetime.css";
import saveimg from "./Image/Bulbe Men.png";

import emailjs from "@emailjs/browser";
import { RxCrossCircled } from "react-icons/rx";






const Savetime = () => {
  const [model, setModel] = useState(false);

  const toggleModle = () => {
    setModel(!model);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dasjhxa",
        "template_vjw0roc",
        form.current,
        "7wG66B5lQGaY8iG2k"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <button onClick={toggleModle} >share your details</button>
           {model && (
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
           
          }}
          ref={form}
          onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
       
      )}
         {model && (
       <button onClick={toggleModle}>
        <RxCrossCircled/>
      </button>
         )}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Savetime;
