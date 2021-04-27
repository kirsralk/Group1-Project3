import React, { Component } from "react";
import logo from "../logo.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


function Login() {
  return (
  <> 
  Hi!
  <br />
  <a href="/main"><Button>Login</Button></a>
  </>
  );
}

export default Login;
