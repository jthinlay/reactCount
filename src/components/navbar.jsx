import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="https://www.jtwebarchitect.com">
          Navbar
          <span className="badge m-2 badge-info badge-pill">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
export default NavBar;
