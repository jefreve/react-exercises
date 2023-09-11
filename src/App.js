import React from "react";
import { Login } from "./Login";

export class App extends React.Component {
  state = {
    isLogged: false,
  };

  onLogin = () => {
    console.log(this.state.isLogged);
  };

  render() {
    return (
      <div>
        <Login onLoginHandler={this.onLogin} />
      </div>
    );
  }
}
