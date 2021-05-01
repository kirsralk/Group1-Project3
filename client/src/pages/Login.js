import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from 'react-bootstrap/Button';
import LoginButton from "../components/LoginButton";


function Login() {
  return (
  <> 
  Hi!
  <LoginButton />
  <br />
  {/* <a href="/main"><Button>Login</Button></a> */}
  </>
  );
}

export default Login;
