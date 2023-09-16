import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  constructor(props) {
    super(props);

    this.disabledInitialValue = true;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const username = this._formRef.current.username.value;
    const password = this._formRef.current.password.value;

    console.log({
      username,
      password,
    });
  };

  handleChangeInput = () => {
    const user = this._formRef.current.username.value;
    const pass = this._formRef.current.password.value;
    let loginBtn = this._formRef.current.loginBtn;
    const expression = user.length > 0 && pass.length > 0;

    loginBtn.disabled = expression ? false : true;
  };

  handleReset = () => {
    const username = this._formRef.current.username;
    const password = this._formRef.current.password;
    username.value = "";
    password.value = "";

    let loginBtn = this._formRef.current.loginBtn;
    loginBtn.disabled = true;
  };

  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleSubmit}>
          <input name="username" onChange={this.handleChangeInput} />
          <input
            name="password"
            type="password"
            onChange={this.handleChangeInput}
          />

          <button
            disabled={this.disabledInitialValue}
            type="submit"
            name="loginBtn"
          >
            Login
          </button>
          <button type="button" onClick={this.handleReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}
