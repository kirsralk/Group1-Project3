import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "../components/LoginButton";
import "../App.css";

function Login() {
  return (
    <>
      <div class="login">
        <br />
        <br />
        <h1 class="big-title">¢rypto¢hat</h1>
        <p align="center"><LoginButton /></p>
          <img src="./auth0logo.png" alt=""/>
        <br />
      </div>
    </>
  );
}

export default Login;
