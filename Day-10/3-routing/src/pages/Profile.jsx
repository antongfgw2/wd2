import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import "./Profile.css";

const Profile = () => {
  const { username } = useParams();

  useEffect(() => {
    if (username) {
      console.log("Api called");
    }
  }, [username]);

  return (
    <div className="profile__container">
      <h1>Profile - {username}</h1>
    </div>
  );
};

export default Profile;
