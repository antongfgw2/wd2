import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/users";
import "./Home.css";

const Home = () => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    email: "",
    contact: "",
    age: "",
    jobRole: "",
    companyId: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        id: uuid(),
      };
    });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const handleAdd = () => {
    dispatch(addUser(userInfo));
    setUserInfo({
      id: uuid(),
      name: "",
      email: "",
      contact: "",
      age: "",
      jobRole: "",
      companyId: "",
    });
  };

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__formContainer">
          <div className="home__title">Add User Information</div>
          <input type="text" value={userInfo.id} disabled />
          <br />
          <input
            name="name"
            placeholder="Enter user's name"
            onChange={handleChange}
            value={userInfo.name}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter user's email"
            onChange={handleChange}
            value={userInfo.email}
          />
          <br />
          <input
            type="number"
            name="contact"
            placeholder="Enter user's contact no"
            onChange={handleChange}
            value={userInfo.contact}
          />
          <br />
          <input
            type="number"
            name="age"
            placeholder="Enter user's age"
            onChange={handleChange}
            value={userInfo.age}
          />
          <br />
          <input
            name="jobRole"
            placeholder="Enter user's role"
            onChange={handleChange}
            value={userInfo.jobRole}
          />
          <br />
          <input
            name="companyId"
            placeholder="Enter user's company Id"
            onChange={handleChange}
            value={userInfo.companyId}
          />
          <br />
          <button onClick={handleAdd}>Add User</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
