import React from "react";
import "./style.css";
import LogoutButton from "../Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "react-bootstrap";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar1() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    isAuthenticated && (
      <Navbar variant="dark">
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Logged in as: <b>{user.name}</b> &nbsp;</Navbar.Text>
          <LogoutButton />
        </Navbar.Collapse>
      </Navbar>
    )
  );
}

export default Navbar1;
