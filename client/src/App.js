import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main"
import Login from "./pages/Login"
require('dotenv').config();

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
