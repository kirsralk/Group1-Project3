import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
  <style type="text/css">
    {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

  <Button variant="outline-light" size="xxl" onClick={() => loginWithRedirect()}>Log In</Button>
</>
  );
  
  // <Button variant="outline-light" size="xxl" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default LoginButton;