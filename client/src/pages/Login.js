import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginButton from "../components/LoginButton";
import "../App.css";

function Login() {
  return (
    <>
      <div class="test">
        <br />
        <br />
        <img class="heading" src="../cryptochat.png" alt="" />
        <p align="center"><LoginButton /></p>
        <br />
      </div>
    </>
  );
}

export default Login;
