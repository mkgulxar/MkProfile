import React from "react";
import "./Choose.css";
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <>
      <div className="choose">
        <h3>Why Choose Us</h3>
        <p>
          When looking for a one stop Solution FH is the name to go for, you
          name it and we got the required services one is looking
          for.Insightful, bright and full of brimming ideas that one needs at
          the start of any venture. Once you start working with FH there will be
          no need to look elsewhere.
        </p>
      </div>
      <div className="banner2-flex">
      <div className="team mask-1">
        <div className="team-work1 teamw">
        <Link to="/image" target="_blank" rel="noreferrer">
            <img  src="https://i.pinimg.com/564x/89/7b/96/897b964fc8388d2cdfbdccc578e26a04.jpg" alt="" />
            </Link>
        </div>
      </div>
      <div className="team mask-2">
        <div className="team-work2 teamw">
        <Link to="/image" target="_blank" rel="noreferrer">
            <img src="https://i.pinimg.com/564x/47/54/2f/47542fa57172ccfca271aec7d1da6590.jpg" alt="" />
            </Link>
        </div>
      </div>
      <div className="team mask-3">
        <div className="team-work3 teamw">
        <Link to="/image" target="_blank" rel="noreferrer">
            <img src="https://i.pinimg.com/564x/19/56/98/1956986a8baae5037c266e63a927d478.jpg" alt="" />
            </Link>
        </div>
      </div>
      <div className="team mask-4">
        <div className="team-work4 teamw">
        <Link to="/image" target="_blank" rel="noreferrer">
            <img src="https://i.pinimg.com/736x/c1/1e/4a/c11e4ae2c340e00adb4aa7bfed572a82.jpg" alt="" />
            </Link>
        </div>
      </div>
      </div>
     <div className="choose">
     <div className="choose-text">
        <h3>Let's Build Something</h3>
        <div className="choose-btn">
        <a href="/team">OUR TEAM</a>
        </div>
      </div>
     </div>
    </>
  );
};
export default Choose;
