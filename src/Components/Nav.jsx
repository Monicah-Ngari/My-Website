import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Projects</Nav.Link>
          <Nav.Link href="#features">Skills</Nav.Link>
          <Nav.Link href="#features"> Education</Nav.Link>
          <Nav.Link href="#pricing">Contact Me</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
