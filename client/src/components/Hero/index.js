import React from "react";
import "./style.css";
import background from "./bitcoin2.jpg";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${background})` }}>
      {/* {props.children} */}
    </div>
  );
}

export default Hero;