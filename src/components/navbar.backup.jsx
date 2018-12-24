import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="https://www.jtwebarchitect.com">
            Navbar{" "}
            <span className="badge m-3 badge-pill badge-secondary">
              {this.props.totalCounters}
            </span>
            <span className="badge m-3 badge-pill badge-secondary">
              {this.props.subtotalCounters}
            </span>
          </a>
        </nav>
      </div>
    );
  }
}
export default Navbar;
