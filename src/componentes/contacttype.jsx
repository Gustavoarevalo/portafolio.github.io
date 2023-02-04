import React, { Component } from "react";
import Typed from "typed.js";

class Contacttype extends Component {
  componentDidMount() {
    const options = {
      strings: ["Contact"],
      typeSpeed: 70,
    };
    this.typed = new Typed("#typed-text", options);
  }

  render() {
    return (
      <div
        id="typed-text"
        className="pt-2 sm:pt-16 text-green-500 text-5xl sm:text-6xl text-center"
      ></div>
    );
  }
}

export default Contacttype;
