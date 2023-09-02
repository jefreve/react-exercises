import React from "react";

export class Counter extends React.Component {
  state = {
    count: 0,
  };

  constructor(props) {
    super(props);

    this._interval = setInterval(() => {
      this.setState((state) => ({ count: state.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  render() {
    return <h1>{this.state.count}</h1>;
  }
}
