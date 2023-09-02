import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initVal={5} increment={1} interval={500} />
      </div>
    );
  }
}
