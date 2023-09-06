import React from "react";
import { Login } from "./Login";

export class App extends React.Component {
  onLogin = () => {
    console.log("ciao");
  };

  render() {
    return (
      <div>
        <Login loginHandler={this.onLogin} />
      </div>
    );
  }
}
