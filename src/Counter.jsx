import React, { useState } from "react";

export function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  function handleCounterReset() {
    setCount((c) => (c = initialValue));
  }

  function handleCounterIncrement() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleCounterReset}>Reset</button>
    </div>
  );
}
