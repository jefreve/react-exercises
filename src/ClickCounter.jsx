import React, { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={incrementCounter}>+</button>
    </>
  );
}
