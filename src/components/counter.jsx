import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          className="btn m-2 btn-info"
          onClick={() => this.props.onIncrement(this.props.counters)}
        >
          Increment
        </button>
        <button
          className="btn m-2 btn-info"
          onClick={() => this.props.onDecrement(this.props.counters)}
        >
          Decrement
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => this.props.onDelete(this.props.counters.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-pill badge-";
    classes += this.props.counters.value === 0 ? "warning" : "info";
    return classes;
  }
  formatValue() {
    const { value } = this.props.counters;
    return value === 0 ? "ZERO" : value;
  }
}
export default Counter;
