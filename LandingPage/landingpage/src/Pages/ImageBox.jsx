import React from "react";
import "../Pages/ImageBox.css";
import boximg from "../images/girl-image.png";
import { AiFillHeart } from "react-icons/ai";

function ImageBox() {
  return (
    <>
      <div className="box-image-flex">
        <div className="box-image-img">
          <img src={boximg} alt="" />
        </div>
        <div style={{padding:"40px"}}>
          <div className="box-image-text">
            <h2>our value to help you</h2>
            <p>
              we always want to the best value for you and your health, join us
              to maximize the benefits
            </p>
          </div>
         <div style={{display:"flex",alignItems:"center",justifyContent:"center",maxWidth:"540px",flexWrap:"wrap",gap:"30px"}}>
         <div className="box-image-box">
            <AiFillHeart style={{fontSize:"45px" ,border:"3px solid rgb(167, 132, 202)",color: "#fff",background:" #944cde",borderRadius:"15px",padding:"5px",transform:"translateY(-18px)" }}   />
            <h5>becomes healthier</h5>
            <p>immune will stronger if the body is healthier</p>
          </div> <div className="box-image-box">
            <AiFillHeart style={{fontSize:"45px" ,border:"3px solid rgb(167, 132, 202)",color: "#fff",background:" #944cde",borderRadius:"15px",padding:"5px",transform:"translateY(-18px)" }} />
            <h5>becomes healthier</h5>
            <p>immune will stronger if the body is healthier</p>
          </div> <div className="box-image-box">
            <AiFillHeart style={{fontSize:"45px" ,border:"3px solid rgb(167, 132, 202)",color: "#fff",background:" #944cde",borderRadius:"15px",padding:"5px",transform:"translateY(-18px)" }} />
            <h5>becomes healthier</h5>
            <p>immune will stronger if the body is healthier</p>
          </div> <div className="box-image-box">
            <AiFillHeart style={{fontSize:"45px" ,border:"3px solid rgb(167, 132, 202)",color: "#fff",background:" #944cde",borderRadius:"15px",padding:"5px",transform:"translateY(-18px)" }} />
            <h5>becomes healthier</h5>
            <p>immune will stronger if the body is healthier</p>
          </div>
         </div>
        </div>
      </div>
    </>
  );
}

export default ImageBox;
