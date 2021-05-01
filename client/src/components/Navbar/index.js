import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LogoutButton from "../Logout";
// import { useAuth0 } from "@auth0/auth0-react";
// import User from "../User";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Crypto Chat
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Logout
            </Link> */}
            <LogoutButton />
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
