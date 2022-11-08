//  import React from 'react'
import { useState } from "react";
import "./index.css";

function AppCounter() {
  const initial = 0;
  const [value, setValue] = useState(initial);

  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(initial);
  };

  return (
    <div className="container">
      <h2>{value}</h2>
      <button className="btn" onClick={handleIncrement}>
        Increment
      </button>
      <button className="btn" onClick={handleDecrement}>
        Decrement
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default AppCounter;
