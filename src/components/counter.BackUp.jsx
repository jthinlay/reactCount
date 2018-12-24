import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <span className="m-2">
          <img
            src="plusSign.png"
            alt="increment plus sign"
            width="30"
            height="30"
            className="img-thumbnail"
            onClick={() => this.props.onIncrement(this.props.counter)}
          />
        </span>

        <span className="badge m-2">
          <img
            src="minusSign.png"
            alt="decrement minus sign"
            width="30"
            height="30"
            className="img-thumnail"
            onClick={() => this.props.onDecrement(this.props.counter)}
          />
        </span>

        {/* <button
          className="btn btn-info m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button> */}
        {/* <button
          className="btn btn-info m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button> */}
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let Classes = "badge m-2 badge-";
    Classes += this.props.counter.value === 0 ? "warning" : "info";
    return Classes;
  }
  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "ZERO" : value;
  }
}
export default Counter;
