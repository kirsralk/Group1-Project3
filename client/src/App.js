import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApiTestComponent from "./components/Ticker";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main"
import Login from "./pages/Login"
// import { Table } from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main}/>
      </Router>
    );
  }
}

export default App;
