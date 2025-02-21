import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles.css";
import NavigationBar from "./Nav";
import Logo from "../Images/logo.svg";

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
