import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <span>
          <button className="btn m-2 btn-warning" onClick={this.props.onReset}>
            Reset
          </button>

          <span className="badge badge-danger m-2 badge-pill">
            {this.props.counter.filter(c => c.value > 0).length}
          </span>
        </span>
        {this.props.counter.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            value={counter.value}
            id={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            totalCounters={this.props.counter.filter(c => c.value > 0).length}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
