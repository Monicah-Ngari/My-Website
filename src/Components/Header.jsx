import React from "react";
import Nav from "./Nav";
import Logo from "../Images/logo.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img src={Logo} alt="Logo" style={{ width: "130px", height: "auto" }} />
      </header>
      <Nav />

      <h1>Monicah Ngari - Web Developer</h1>
    </div>
  );
};
export default Header;
