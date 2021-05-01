import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./style.css";

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} class="navUser"/> <p>{user.name}</p>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default User;