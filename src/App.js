import React from "react";
import { Hello } from "./Hello";
import { Message } from "./Message";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Message />
      </div>
    );
  }
}
