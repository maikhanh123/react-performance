import React, { Component } from "react";

export default class UseReactMemo extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      user: {
        name: "Khanh",
        age: "22",
        designation: "Developper"
      }
    };
  }

  updateState = () => {
    setInterval(() => {
      if (this._isMounted) {
        this.setState({
          user: {
            name: "Khanh11",
            age: "23",
            designation: "Developper11"
          }
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
    return <MemoComponent user={this.state.user} />;
  }
}

function CustomisedComponent(props) {
  console.log("CustomisedComponent Rendered..");
  console.log("props.user ======>", props.user);
  return (
    <div>
      <b>User name: {props.user.name}</b> <br />
      <b>User age: {props.user.age}</b> <br />
      <b>User designation: {props.user.designation}</b>
    </div>
  );
}

// The component below is the optimised version for the Default Componenent
// The Component will not re-render if same props value for "name" property
// var memoComponent = React.memo(CustomisedComponent);

// custom comparator with function
function UserComparator(previosProps, nextProps) {
  if (
    previosProps.user.name === nextProps.user.name ||
    previosProps.user.age === nextProps.user.age ||
    previosProps.user.designation === nextProps.user.designation
  ) {
    return true;
  } else {
    return false;
  }
}
var MemoComponent = React.memo(CustomisedComponent, UserComparator);
