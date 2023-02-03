import React from "react";
import "./Team.css";

import MeM4 from "./Image/Ali-Haider.png";
import MeM3 from "./Image/Zulabia.png";
import MeM2 from "./Image/Nimra.png";
import MeM1 from "./Image/Mk.png";
import Photo from "./Image/OurTeam.png";

const Team = () => {
  return (
    <>
      <div className="Pic">
        <div className="Heading">
          <h1>OUR TEAM</h1>
        </div>
        <div className="teamimg">
          <img src={Photo} alt=""/>
        </div>
        <div className="para">
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.
          </p>
          <h2>WE BRING LIFE TO YOUR IDEAS AND DREAMS.</h2>
        </div>
      </div>
      <div className="First-Person">
        <img src={MeM1} alt="" />

        <div className="team-member-1">
          <h1>Mk Gulxar</h1>
          <h2>management director</h2>
          <p>
            It is a world class group which offers experience, equipment, and
            overall know-how of what is needed to build a business from scratch.
            with years of experience, required facilities and resources under
            one roof fh provides one step solution to all its clients which not
            only saves time and energy but the creative output that is unlikely
            to be found elsewhere.
          </p>
        </div>
      </div>
      <div className="Second-line-member">
        <div className="Second-center">
          <img src={MeM2} alt="" />
          <div className="team-member-2">
            <h1>Nimra Malik</h1>
            <h2>Creative Coordinator</h2>
            <p>
              It is a world class group which offers experience, equipment, and
              overall know-how of what is needed to build
            </p>
          </div>
        </div>
        <div className="Second-center">
          <img src={MeM3} alt="" />
          <div className="team-member-2">
            <h1>Zulabia</h1>
            <h2>UI / UX Designer</h2>
            <p>
              It is a world class group which offers experience, equipment, and
              overall know-how of what is needed to build
            </p>
          </div>
        </div>
        <div className="Second-center">
          <img src={MeM4} alt="" />
          <div className="team-member-2">
            <h1>Ali Haider</h1>
            <h2>React | HTML</h2>
            <p>
              It is a world class group which offers experience, equipment, and
              overall know-how of what is needed to build
            </p>
          </div>
        </div>
        </div>
        <div>
        <div className="Third-center">
          <img src={MeM4} alt="" />
          <div className="team-member-3">
            <h1>Ali Haider</h1>
            <h2>React | HTML</h2>
            <p>
              It is a world class group which offers experience, equipment, and
              overall know-how of what is needed to build
            </p>
          </div>
        </div>
        <div className="Third-center">
          <img src={MeM4} alt="" />
          <div className="team-member-3">
            <h1>Ali Haider</h1>
            <h2>React | HTML</h2>
            <p>
              It is a world class group which offers experience, equipment, and
              overall know-how of what is needed to build
            </p>
          </div>
        </div>
        </div>
    </>
  );
};
export default Team;
