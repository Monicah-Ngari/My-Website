// import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles.css";

const NavigationBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>

            <Nav.Link href="#contact">Contact</Nav.Link>
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
