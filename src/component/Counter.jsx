import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button className="btn btn-primary px-3 me-3" onClick={increase}>
        +
      </button>
      <button className="btn btn-primary px-3 me-3" onClick={decrease}>
        -
      </button>
    </div>
  );
};

export default Counter;
