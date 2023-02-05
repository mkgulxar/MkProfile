import React, { useState } from "react";

export default function Textform(props) {
  //   const handleUpClick = () => {
  //     console.log("Uppercase was clicked" + text)
  //     let newText = text.toUpperCase();
  //     setText(newText);
  //   };
  //   const handleOnChange = (event) => {
  //     console.log("On change")
  //     setText(event.target.value);
  //   };
  //   const [text, setText] = useState("Enter text here");


  
  const [data, setData] = useState(null);  
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(val.target.value);
    setPrint(false)
    console.warn(val.target.value);
  }

  return (
    // <div>
    //   <h1>{props.heading} </h1>

    //   <textarea value={text} onChange={handleOnChange}></textarea>
    //   <button onClick={handleUpClick}>uppercace</button>
    // </div>
    <>
      {
        print?
        <h1>{data}</h1>
        :null
      }
      <input type="text" on onChange={getData} />
      <button onClick={()=>setPrint(true)}>Print Value</button>
    </>
  );
}
