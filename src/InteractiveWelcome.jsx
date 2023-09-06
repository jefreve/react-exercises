import React from "react";
import { Welcome } from "./welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    value: "",
  };
  handleChangeInput = (event) => {
    const value = event.target.value;
    this.setState({ value: value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeInput}
        />
        <Welcome name={this.state.value} />
      </div>
    );
  }
}
