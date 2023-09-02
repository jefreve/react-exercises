import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initVal={97} increment={2} interval={500} />
      </div>
    );
  }
}
