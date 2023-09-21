import React, { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function onIncrement() {
    setCount((c) => c + 1);
  }

  function onDecrement() {
    setCount((c) => c - 1);
  }

  function onReset() {
    setCount((c) => (c = initialValue));
  }

  return { count, onIncrement, onDecrement, onReset };
}
