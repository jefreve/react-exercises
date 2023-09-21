import React from "react";
import { useCounter } from "./useCounter";

export function Counter({ initialValue }) {
  const { count, onIncrement, onDecrement, onReset } = useCounter(initialValue);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
