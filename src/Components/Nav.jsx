import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles.css"; // Make sure to import your custom CSS if needed

const NavigationBar = () => {
  return (
    <Navbar
      bg="primary"
      expand="lg"
      variant="text-white"
      className="navbar-dark"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
