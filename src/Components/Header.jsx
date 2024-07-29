import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import NavigationBar from "./Nav";
import Logo from "../Images/logo.jpeg";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "130px", height: "auto" }}
          className="MyLogo"
        />
        <NavigationBar />
      </header>
    </div>
  );
};

export default Header;
