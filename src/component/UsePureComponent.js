import React from "react";

class RegularChildComponent extends React.Component {
  render() {
    console.log("Regular Component Rendered..");
    return <div>{this.props.name}</div>;
  }
}

class PureChildComponent extends React.PureComponent {
  // Pure Components are the components that do not re-render if the State data or props data is still the same

  render() {
    console.log("Pure Component Rendered..");
    return <div>{this.props.name}</div>;
  }
}

export default class UsePureComponent extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      name: "Mayank"
    };
  }

  updateState = () => {
    setInterval(() => {
      if (this._isMounted) {
        this.setState({
          name: "Mayank 2"
        });
      }
    }, 5000);
  };

  componentDidMount() {
    console.log("Is Mounted ====>", this._isMounted);
    this._isMounted = true;
    this.updateState();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    console.log("Render Called Again");
    return (
      <div>
        <RegularChildComponent name={this.state.name} />
        <PureChildComponent name={this.state.name} />
      </div>
    );
  }
}
