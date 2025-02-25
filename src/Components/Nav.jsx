import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Navbar.Collapse id="navbarScroll" className={isOpen ? "show" : ""}>
          <Nav navbarScroll>
            <Nav.Link href="#home" className="links">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="links">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="links">
              Projects
            </Nav.Link>

            <Nav.Link href="#contact" className="links">
              Contact
            </Nav.Link>
            <a
              href="https://docs.google.com/document/d/1pAhs6MR1amxnCOF9thGCBEYj7D5CIjWo_NOnC2ZF9Zg/edit?usp=drive_link"
              className="resume-button"
              download="Monicah_Ngari_Resume.pdf"
            >
              <i className="fas fa-file-alt"></i> Download My Resume
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
