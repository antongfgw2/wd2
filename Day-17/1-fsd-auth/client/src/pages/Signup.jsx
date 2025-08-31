import React from "react";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserInput((curr) => {
      return {
        ...curr,
        [name]: value,
      };
    });
  };

  const submit = async () => {
    const { data } = await axios.post(
      "http://localhost:8080/user/signup",
      userInput
    );
    console.log(data);
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <button onClick={submit}>Register</button>
    </div>
  );
};

export default Signup;
