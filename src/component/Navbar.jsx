import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import eb from "../assets/logo.png";
import "./Menu.css";

// import { Link } from "react-router-dom";

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>

function ColorSchemesExample() {
  return (
    <>
      <div className="navi">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container className="navbar">
            <Navbar.Brand href="#home">
              <img
                src={eb}
                width="160px"
                height="120px"
                className="d-inline-block align-top"
                alt="Eb's Kitchen logo"
              />
            </Navbar.Brand>
            <Nav className="navItem">
              <Nav.Link href="./Menu">Home</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="./Order">Place order</Nav.Link>
              <Nav.Link href="#Contact">Contact</Nav.Link>
              <Nav.Link href="#Cart">Cart</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;
