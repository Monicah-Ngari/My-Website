import React from "react";
import Nav from "./Nav";
import Logo from "../Images/Logo,jpeg";

const Header = () => {
  return (
    <div className="Header">
      <Nav />
      <header>
        <img src={Logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      </header>

      <h1>Monicah Ngari - Web Developer</h1>
    </div>
  );
};
export default Header;
