import React, { Component } from "react";
import Typed from "typed.js";

class Abouttype extends Component {
  componentDidMount() {
    const options = {
      strings: ["About"],
      typeSpeed: 90,
    };
    this.typed = new Typed("#typed-text", options);
  }

  render() {
    return (
      <div
        id="typed-text"
        className="pt-24 text-green-500 text-6xl text-center"
      ></div>
    );
  }
}

export default Abouttype;
