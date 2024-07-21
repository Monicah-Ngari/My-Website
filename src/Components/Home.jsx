import React from "react";
import profileImage from "..Images.jpeg/Profile.jpeg";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <img alt="My profile Picture" src={profileImage} />
    </div>
  );
};
export default Home;
