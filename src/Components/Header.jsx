import React from "react";
import "../styles.css";
import NavigationBar from "./Nav";
import svg from "../Images/Logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img src={svg} alt="Logo" className="logo" />
        <NavigationBar />
      </header>
    </div>
  );
};

export default Header;
