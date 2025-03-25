import React, { useState, useEffect } from "react";

const AboutUseEffect = () => {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      setMultiply(count * 2);
    }, 1000);
  }); // Add empty square brackets to run useEffect only once

  return (
    <div>
      <h2>About UseEffect Hook</h2>
      <p>I have rendered {count} times</p>
      <p>
        {count} x 2 = {multiply}
      </p>
    </div>
  );
};

export default AboutUseEffect;
