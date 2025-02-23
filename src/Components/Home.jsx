import React from "react";
import "../styles.css";

import profileImage from "../Images/Profile.jpeg";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="hero">
          <h1 className="hero-text">Monicah Ngari - Web Developer.</h1>
          <img
            alt="My profile Picture"
            src={profileImage}
            className="Profile cimg-fluid"
          />
        </div>
      </section>
    </div>
  );
};
export default Home;
