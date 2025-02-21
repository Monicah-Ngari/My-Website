import React from "react";
import "../styles.css";
import NavigationBar from "./Nav";
import logo from "../Images/logoo.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img src={logo} alt="Logo" className="logo" />
        <NavigationBar />
      </header>
    </div>
  );
};

export default Header;
