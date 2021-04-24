import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApiTestComponent from "./components/ApiTestComponent";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to Crypto Chat</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <ApiTestComponent />
      </Router>
    );
  }
}

export default App;
