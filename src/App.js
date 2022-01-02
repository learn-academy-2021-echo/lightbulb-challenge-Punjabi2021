import React, { Component } from "react";
import Bulb from "./components/Bulb";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      light: "off",
    };
  }

  switch = () => {
    this.setState({ light: "on" });

    if (this.state.light === "off") {
      // console.log("on");
    } else {
      this.setState({ light: "off" });
    }
  };
  render() {
    return (
      <>
        <Bulb lightOnOff={this.state.light} />
        <label className="toggle">
          <span className="onoff">{this.state.light}</span>
          <input type="checkbox" />
          <span onClick={this.switch} className="slider round"></span>
        </label>{" "}
      </>
    );
  }
}

export default App;
