import React, { useState } from "react";
import { Counter } from "./Counter";

document.body.style = "background-color: #777; color: white; padding-left:8px";

export function App() {
  const [mountChild, setMountChild] = useState(true);

  function unmount() {
    setMountChild((mountChild) => !mountChild);
  }

  return (
    <div>
      {mountChild && (
        <Counter initialValue={0} incrementInterval={1} incrementAmount={1} />
      )}
      <button onClick={unmount}>{mountChild ? "UNMOUNT" : "MOUNT"}</button>
    </div>
  );
}
