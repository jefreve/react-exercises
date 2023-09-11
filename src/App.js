import React from "react";
import { Login } from "./Login";

export class App extends React.Component {
  state = {
    value: true,
    number: 7,
    date: new Date(),
    string: "this is the state",
  };

  onLogin = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Login loginFunction={this.onLogin} />
      </div>
    );
  }
}
