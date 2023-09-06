import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    return (
      <div>
        <input name="username" type="text" value={this.state.username} />
        <input name="password" type="password" value={this.state.password} />
        <button onClick={this.props.loginHandler}>Login</button>
      </div>
    );
  }
}
