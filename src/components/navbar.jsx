import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-brand" href="#">
          Navbar
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link">
                <NavLink to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink to="/about">About</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <NavLink to="/counter">Counter</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default NavBar;
