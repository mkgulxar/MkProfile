import React, { useRef, useState } from "react";
import "./savetime.css";
import saveimg from "./Image/Bulbe Men.png";
import "./Email.css";
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
            <button className="save-btn" onClick={toggleModle}>
              share your details
            </button>
            {model && (
              <div className="model">
                <div className="overlay-2">
                  <div className="model-content">
                    <form ref={form} onSubmit={sendEmail} className="form-flex">
                      <div className="name-flex">
                        <div className="first">
                          <label>First Name</label>
                          <input type="text" name="user_name" />
                        </div>
                        <div className="first">
                          <label>Last Name</label>
                          <input type="text" name="user_name" />
                        </div>
                      </div>
                      <div>
                        <label>Company</label>
                        <input type="text" name="user_name" />
                      </div>
                      <div>
                        <label>Email</label>
                        <input type="email" name="user_email" />
                      </div>
                      <div>
                        <label>Message</label>
                        <textarea name="message" />
                      </div>
                      <input type="submit" value="Submit" />
                    </form>
                    <button className="save-overlay-btn" onClick={toggleModle}>
                      <RxCrossCircled />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Savetime;
