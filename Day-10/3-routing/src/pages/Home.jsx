import React from "react";
import { Link } from "react-router";
import "./Home.css";

const Home = () => {
  const name = "Jacob";

  return (
    <div className="home__container">
      <h1>Home</h1>
      <Link to={`/jacob`}>Product Title</Link>
    </div>
  );
};

export default Home;
