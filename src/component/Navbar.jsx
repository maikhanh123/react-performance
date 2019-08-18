import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/pureComponent">
              Pure Component{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/reactMemo">
              React Memo{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/shouldComponentUpdate">
              Should Component Update{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/lazyLoading">
              LazyLoading{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/inlineFunction">
              Inline Function{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/bindFunction">
              Bind Function{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/optimizeCondition">
              Optimize Condition{" "}
            </NavLink>
            <NavLink className="nav-item nav-link" to="/errorBoundaries">
              Error Boundaries{" "}
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
