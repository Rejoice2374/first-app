import React from "react";

const AboutProps = (props) => {
  return (
    <div>
      {props.children}
      <h2>Name: {props.name}</h2>
      <h4>Dept: {props.dept}</h4>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default AboutProps;
