import React, { Component } from "react";

export default class UserShouldComponentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mayank",
      age: 30,
      designation: "Architect"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        designation: "Senior Architect"
      });
    }, 5000);
  }

  //Passing true from shouldComponentUpdate notifies that the component can be re-rendered and vice versa.
  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.age !== this.state.age ||
      nextState.name !== this.state.name ||
      nextState.designation !== this.state.designation
    ) {
      return true;
    }
    return false;
  }

  render() {
    console.log("Render ShouldComponentUpdate Class Called Again ...");
    return (
      <div>
        <b>User Name:</b> {this.state.name} <br />
        <b>User Age:</b> {this.state.age} <br />
        <b>User Designation:</b> {this.state.designation}
      </div>
    );
  }
}
