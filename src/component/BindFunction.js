import React, { Component } from "react";

export default class BindFunction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mayank"
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    alert("Button Clicked: " + this.state.name);
  }

  render() {
    console.log(this.handleButtonClick);
    return (
      <React.Fragment>
        <input type="button" value="Click" onClick={this.handleButtonClick} />
      </React.Fragment>
    );
  }
}
