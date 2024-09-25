// import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles.css";

const NavigationBar = () => {
  return (
    <Navbar
      bg="primary"
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
            style={{ maxHeight: "100px", justifyContent: "center" }}
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
