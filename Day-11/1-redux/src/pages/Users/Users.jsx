import React from "react";
import { useSelector } from "react-redux";
import User from "../../components/User/User";

const Users = () => {
  const users = useSelector((state) => state.userInfo.users);

  return (
    <div className="users">
      <div className="users__title">Users</div>
      <div className="users__container">
        {users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
      </div>
    </div>
  );
};

export default Users;
