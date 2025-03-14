import React from "react";
import Cat from "../assets/cat.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  const app = "Temu";
  const num = 5;
  const hasMoney = false;
  const [age, setAge] = useState(0);

  return (
    <div>
      {/* This is a comment */}
      <p>
        There's an ad that keeps chasing me on social media. The name is {app}.
        It can appear on my feed {num} times in an hour
      </p>

      {/* Working with Conditional Statement / Ternary operators */}
      <p>
        {hasMoney
          ? "Our brother will marry you"
          : "Our brother will not marry you"}
      </p>

      {/* Inserting Images */}
      <img src={Cat} alt="" width="30%" />

      {/* Working with useState */}
      <div className="agePrompt">
        <input
          type="text"
          placeholder="Enter your age"
          onChange={(event) => setAge(event.target.value)}
        />
        <p>
          {age < 18 ? "You are not eligible" : "You are eligible, Welcome."}
        </p>

        {/* Linking to another Component */}
        <Link to="/Intro2">Go to Intro2 page</Link>
        <Link to="/Test">Test page</Link>
      </div>
    </div>
  );
};

export default Intro;
