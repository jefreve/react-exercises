import React from "react";

export class ClickTracker extends React.Component {
  state = {
    whichButton: "none",
  };

  trackButton = (event) => {
    this.setState({
      whichButton: event.target.name,
    });
  };

  render() {
    return (
      <>
        <button name="1" onClick={this.trackButton}>
          1
        </button>
        <button name="2" onClick={this.trackButton}>
          2
        </button>
        <button name="3" onClick={this.trackButton}>
          3
        </button>
        <h1>Last Pressed: {this.state.whichButton}</h1>
      </>
    );
  }
}
