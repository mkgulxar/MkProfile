import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { RxCrossCircled } from "react-icons/rx";

export const Email = () => {
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
    <div>
  
      {model && (
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      )}
      <button onClick={toggleModle}>
        <RxCrossCircled/>
      </button>
    </div>
  );
};
