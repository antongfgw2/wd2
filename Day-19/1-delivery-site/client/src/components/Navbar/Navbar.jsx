import React from "react";
import { Link } from "react-router";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../slices/user";

const Navbar = () => {
  const user = useSelector((state) => state.userInfo.user);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <div>
          <h1>Zomgy</h1>
        </div>
        <ul>
          {user && user.userType === 1 && (
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
          )}
          {user && user.userType === 2 && (
            <Link to="/hotel-dashboard">
              <li>Hotel Dashboard</li>
            </Link>
          )}
          {user && user.userType === 3 && (
            <Link to="/hotels">
              <li>Hotels</li>
            </Link>
          )}
          {user && <li>{user?.name}</li>}

          {user && <li onClick={logout}>Logout</li>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
