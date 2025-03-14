import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cat1 from "../assets/cat2.jpg";

const Test = () => {
  return (
    <div>
      <h2>This is a test page</h2>
      <Button variant="primary">Primary</Button>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Cat1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Test;
