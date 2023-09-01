import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome age={32} name="Luca" />
        <Welcome age={32} name="John" />
        <Welcome age={70} name="John" />
        <Welcome age={15} name="John" />
      </div>
    );
  }
}
