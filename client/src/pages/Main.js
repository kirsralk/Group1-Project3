import React, { Component } from "react";
import logo from "../logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Ticker from "../components/Ticker";
import Forum from "../components/Forum";
import User from "../components/User";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Crypto Chat</h2>
        </div>
        <User />
      </div>
      <Ticker/>
      <Forum />
    </>
  );
}

export default Main;
