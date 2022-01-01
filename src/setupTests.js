import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: [
        "",
        "white",
        "green",
        "blue",
        "yellow",
        "red",
        "purple",
        "orange",
      ],
      index: 0,
    };
  }
  showColorName = () => {
    this.setState({
      index:
        this.state.index > this.state.label.length - 2
          ? (this.state.index = 1)
          : (this.state.index += 1),
    });
  };

  render() {
    return (
      <>
        <div
          style={{ background: this.state.label[this.state.index] }}
          onClick={this.showColorName}
          id="square"
        >
          {this.state.label[this.state.index]}
        </div>
      </>
    );
  }
}

export default Box;
