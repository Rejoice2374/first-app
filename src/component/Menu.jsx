import React, { useState } from "react";
import "./Menu.css";
import menuData from "./menuitems";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Menu() {
  const [menu, setMenu] = useState(menuData);
  return (
    <div className="wrapper">
      <div className="left">
        <b>
          <p className="cat-text">SELECT CATEGORY</p>
        </b>

        <button className="btn btn-success" id="btnn">
          Local dish
        </button>
        <div>
          <button className="btn btn-success" id="btnn">
            Foreign dish
          </button>
        </div>
        <div>
          <button className="btn btn-success" id="btnn">
            Drinks
          </button>
        </div>
        <div>
          <button className="btn btn-success" id="btnn">
            All
          </button>
        </div>
      </div>

      <div>
        <div className="menu">
          <h2>Our Menu</h2>
        </div>
        <Container className="dish">
          <Row>
            {menu.map((m) => (
              <Col xs lg="4">
                <Card className="card">
                  <Card.Img variant="top" src={m.Image} className="img" />
                  <Card.Body>
                    <Card.Title style={{ color: "green" }}>{m.name}</Card.Title>
                    <Card.Text>${m.price}</Card.Text>
                    <Button variant="success">ORDER NOW</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Menu;
