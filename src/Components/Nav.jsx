// import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles.css";

const NavigationBar = () => {
  return (
    <Navbar
      // bg="primary"
      expand="lg"
      variant="dark"
      className="navbar-dark"
      style={{
        margin: "0 auto",
        width: "60%",
        borderRadius: "8px",
      }}
    >
      <Container
        fluid
        style={{
          justifyContent: "center",
        }}
      >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{
              maxHeight: "100px",
              justifyContent: "center",
            }}
            navbarScroll
          >
            <Nav.Link
              href="#home"
              style={{
                color: "blue",
                margin: "0 15px",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{
                color: "blue",
                margin: "0 20px",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#projects"
              style={{
                color: "blue",
                margin: "0 20px",
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              style={{
                color: "blue",
                margin: "0 15px",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
