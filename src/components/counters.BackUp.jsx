import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    const {}
  render() {
    return (
      <div>
        <span>
          <button className="btn btn-warning m-2" onClick={this.props.onReset}>
            Reset
          </button>
        </span>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
