import React, { useState, useEffect } from "react";

export function ClickCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    props.onCounterChange(count);
  }, [count, props]);

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
