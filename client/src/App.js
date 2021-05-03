import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar1 from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from "./pages/Main";
import Login from "./pages/Login";
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
require('dotenv').config();

// import { Table } from "react-bootstrap";

library.add( faCheckSquare, faAngleDoubleDown, faAngleDoubleUp )

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar1 />
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main}/>
      </Router>
    );
  }
}

export default App;
