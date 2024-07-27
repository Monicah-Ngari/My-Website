import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import Home from "./Home";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Nav from "./Nav";
import Logo from "../Images/logo.jpeg";

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
          <Nav />
        </header>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Header;
