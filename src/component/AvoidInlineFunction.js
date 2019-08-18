import React, { Component } from "react";

export default class AvoidInlineFunction extends Component {
  state = {
    inputValue: "input value"
  };
  setNewStateData = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <h1>Welcome Guest</h1>
        <input
          type="button"
          onClick={this.setNewStateData}
          value="Click For Inline Function"
        />
      </div>
    );
  }
}
