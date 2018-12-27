import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.props.onIncrement}
            onDerement={this.props.onDerement}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
export default Counters;
