import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import UsePureComponent from "./component/UsePureComponent";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pureComponent" component={UsePureComponent} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
