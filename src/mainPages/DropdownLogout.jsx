import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import "./dropdownlogout.css";

export const DropdownLogout = () => {
  const { usersdata, user, setUser, logout } = useContext(LoginContext);
  const navigate = useNavigate();

  // Logout function
  const handlelogout = () => {
    logout();
  };
  console.log("From dropdownLogut");
  console.log(user.email);

  return (
    <div className="dropdownlogout">
      <p>{user === null ? "pls login" : user.email}</p>

      <Link to="/" className="dropdownli">
        Home
      </Link>

      <Link to="/onlineshopping" className="dropdownli">
        Online Shopping
      </Link>

      <Link to="/loginfile" className="dropdownli">
        Login
      </Link>

      <Link to="/registerfile" className="dropdownli">
        Register
      </Link>

      <span className="dropdownspan" onClick={handlelogout}>
        Logout
      </span>
    </div>
  );
};
