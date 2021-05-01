import React from "react";
// import background from "../bitcoin.jpg";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Ticker from "../components/Ticker";
import Forum from "../components/Forum";
import User from "../components/User";
import Hero from "../components/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollMarquee from "../components/ScrollMarquee";

function Main() {
  return (
    <>
      <div className="App">
        <Hero />
        {/* <div className="App-header" style={{ backgroundImage: `url(${background})` }}> */} 
          {/* <img src={background} /> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <img src={background} /> */}
          {/* <h2>Welcome to Crypto Chat</h2>
        </div> */}
        {/* <User /> */}
        {/* <ScrollMarquee /> */}
     
      <Ticker/>
      <Forum />
       </div>
    </>
  );
}

export default Main;
