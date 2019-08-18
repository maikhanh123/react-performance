import React from "react";
import { Route, Switch } from "react-router-dom";
import UsePureComponent from "./component/UsePureComponent";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import UseReactMemo from "./component/UseReactMemo";
import UserShouldComponentUpdate from "./component/UserShouldComponentUpdate";
import UseLazyLoading from "./component/UseLazyLoading";
import AvoidInlineFunction from "./component/AvoidInlineFunction";
import BindFunction from "./component/BindFunction";
import OptimizeConditionalRendering from "./component/OptimizeConditionalRendering";
import { ErrorBoundaries } from "./component/ErrorBoundaries";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/reactMemo" component={UseReactMemo} />
            <Route path="/pureComponent" component={UsePureComponent} />
            <Route
              path="/lazyLoading"
              component={props => <UseLazyLoading name="Anshul" />}
            />
            <Route
              path="/shouldComponentUpdate"
              component={UserShouldComponentUpdate}
            />
            <Route path="/inlineFunction" component={AvoidInlineFunction} />
            <Route path="/bindFunction" component={BindFunction} />
            <Route
              path="/optimizeCondition"
              component={OptimizeConditionalRendering}
            />
            <Route path="/errorBoundaries" component={ErrorBoundaries} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}
