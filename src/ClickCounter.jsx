import React, { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount((c) => c + 1);
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={incrementCount}>+++</button>
    </div>
  );
}
