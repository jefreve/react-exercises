import React from "react";
import { ClickCounter } from "./ClickCounter";

export function App() {
  function handleCounterChange(value) {
    value <= 10 && console.log(`Counter is now ${value}`);
    value === 11 &&
      console.log(`You have clicked more than 10 times.
Counter value will no longer displayed on the console.`);
  }

  return (
    <div>
      <ClickCounter onCounterChange={handleCounterChange} />
    </div>
  );
}
