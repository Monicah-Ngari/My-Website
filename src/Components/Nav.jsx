import React from "react";

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            My Website
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/products">Home</a>
            </li>
            <li>
              <a href="/about">Education</a>
            </li>
            <li>
              <a href="/about">Skills</a>
            </li>

            <li>
              <a href="/contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
