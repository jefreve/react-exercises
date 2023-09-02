import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initVal,
  };

  // il constructor non serve più in questo caso

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState((state) => ({ count: state.count + this.props.increment }));
    }, this.props.interval);
  }

  componentWillUnmount() {
    if (this._interval) {
      clearInterval(this._interval);
    }
  }

  render() {
    return <CounterDisplay countValue={this.state.count} />;
  }
}
