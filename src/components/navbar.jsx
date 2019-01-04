import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge m-2 badge-danger">
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}
export default NavBar;
