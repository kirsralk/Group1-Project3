import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-mdrmoj72.us.auth0.com"
    clientId="1MNv0fwq3DCgg74cuMZsy5v2SKRo9cqq"
    redirectUri="http://localhost:3000/main"
    // "http://localhost:3000/main" 
    // "https://secure-depths-62084.herokuapp.com/main"
    // {window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);

registerServiceWorker();
