import React, { Component } from "react";
import logo from "../logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApiTestComponent from "../components/ApiTestComponent";
import Forum from "../components/Forum";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Crypto Chat</h2>
        </div>
      </div>
      <Forum />
      <ApiTestComponent />
    </>
  );
}

export default Main;
