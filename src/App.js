import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Luca" age={32} />
        <Welcome name="Gaetano" age={17} />
      </div>
    );
  }
}
