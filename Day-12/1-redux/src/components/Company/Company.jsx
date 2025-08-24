import React from "react";
import { useSelector } from "react-redux";
import User from "../User/User";
import "./Company.css";

const Company = ({ id, name, users }) => {
  const usersInfo = useSelector((state) => state.userInfo.users);

  const userInfo = (id) => {
    const user = usersInfo.find((user) => user.id === id);
    return user;
  };

  return (
    <div className="company">
      <button>Delete</button>
      <h2>
        Id: <span>{id}</span>
      </h2>
      <h3>
        Name: <span>{name}</span>
      </h3>
      <div>
        {users.map((userId) => {
          return <User key={userId} {...userInfo(userId)} />;
        })}
      </div>
    </div>
  );
};

export default Company;
