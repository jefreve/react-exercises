import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome age={17} name="Luca" />
        <Welcome age={19} name="Gaetano" />
      </div>
    );
  }
}
