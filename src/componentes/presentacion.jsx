import React, { Component } from "react";
import Typed from "typed.js";

class Presentacion extends Component {
  componentDidMount() {
    const options = {
      strings: [
        "<h1>My name is Gustavo Arévalo <br/>And I'm a web developer</h1>",
      ],
      typeSpeed: 70,
    };
    this.typed = new Typed("#typed-text", options);
  }

  render() {
    return (
      <div
        id="typed-text"
        className="ml-2 sm:ml-9 xl:ml-24 text-xl sm:text-3xl text-white font-semibold"
      ></div>
    );
  }
}

export default Presentacion;
