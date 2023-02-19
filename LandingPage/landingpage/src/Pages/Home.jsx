import React from "react";
import Slider from "./Slider";
import ImageBox from "./ImageBox";
import Banner01 from "./Banner01";
import HealthyMenu from "./HealthyMenu";

function Home() {
  return (
    <div>
      <Slider />
      <ImageBox />
      <Banner01 />
      <HealthyMenu/>
    </div>
  );
}

export default Home;
