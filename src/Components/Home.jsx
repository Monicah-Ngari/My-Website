import React from "react";
import "../styles.css";

import profileImage from "../Images/Profile.jpeg";

const Home = () => {
  return (
    <div>
      <section id="home">
        <h1>Monicah Ngari - Web Developer</h1>
        <img
          alt="My profile Picture"
          src={profileImage}
          className="Profile cimg-fluid"
        />
      </section>
    </div>
  );
};
export default Home;
