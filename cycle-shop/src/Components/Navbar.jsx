import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <div>
      <h1>HI this is Navbar</h1>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/products">Product</Link>
      </li>
      {isAuthenticated ? (
        <li>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }>
            Log Out
          </button>
        </li>
      ) : (
        <li>
        {console.log(user)}
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>
      )}
    </div>
  );
};

export default Navbar;
