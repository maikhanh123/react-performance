import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="" id="navbarNav">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/pureComponent">
              Pure Component{" "}
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
