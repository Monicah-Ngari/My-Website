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
    <Router>
      <div className="Header">
        <header>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "130px", height: "auto" }}
            className="MyLogo"
          />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pProjects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default Header;
