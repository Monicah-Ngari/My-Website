import React from "react";
import "../styles.css";

import Nav from "./Nav";
import Logo from "../Images/logo.jpeg";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <img src={Logo} alt="Logo" style={{ width: "130px", height: "auto" }} />
      </header>
      <Nav />
    </div>
  );
};
export default Header;
