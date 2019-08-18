import React, { Component } from "react";
import AnshulComponent from "./AnshulComponent";
import MayankComponent from "./MayankComponent";

export default class OptimizeConditionalRendering extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mayank1"
    };
  }

  render() {
    return (
      <React.Fragment>
        {this.state.name === "Mayank" && <MayankComponent />}
        <AnshulComponent />
      </React.Fragment>
    );
  }
}
