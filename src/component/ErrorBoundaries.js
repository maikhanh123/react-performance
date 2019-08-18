import React from "react";

export class ErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrors: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, info) {
    console.log("Component Did Catch");
    // Display fallback UI
    this.setState({ hasErrors: error, errorInfo: info });
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }

  static getDerivedStateFromError(error) {
    console.log("Get Derived State From Error");
    return {
      hasErrors: true
    };
  }

  render() {
    console.log(process.env);
    if (this.state.errorInfo) {
      return <div>This is a Error</div>;
    }

    return (
      <div>
        <ShowData name="Mayank" />
      </div>
    );
  }
}

export class ShowData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mayank"
    };
  }

  changeData = () => {
    this.setState({
      name: "Anshul"
    });
  };
  render() {
    if (this.state.name === "Anshul") {
      throw new Error("Sample Error");
    }

    return (
      <div>
        <b>This is the Child Component {this.state.name}</b> <br />
        <input
          type="button"
          onClick={this.changeData}
          value="Click To Throw Error"
        />
      </div>
    );
  }
}
