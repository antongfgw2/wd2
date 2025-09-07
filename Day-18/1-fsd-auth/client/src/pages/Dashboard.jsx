import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../slices/user";

const Dashboard = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeUser());
    localStorage.removeItem("token");
  };

  return (
    <div>
      <h1>Dashbaord</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
