import React, { Component } from "react";
import Counters from "./counters";

class StateComponent extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = id => {
    const incrementCounters = [...this.state.counters];
    const index = incrementCounters.indexOf(id);
    incrementCounters[index].value++;
    this.setState({ counters: incrementCounters });
  };
  handleDecrement = id => {
    const decrementCounters = [...this.state.counters];
    const index = decrementCounters.indexOf(id);
    decrementCounters[index].value--;
    this.setState({ counters: decrementCounters });
  };
  handleDelete = id => {
    const deleteCounters = this.state.counters.filter(ccc => ccc.id !== id);
    this.setState({ counters: deleteCounters });
  };
  handleReset = () => {
    const resetCounters = this.state.counters.map(ccc => {
      ccc.value = 0;
      return ccc;
    });
    this.setState({ counters: resetCounters });
  };
  render() {
    return (
      <Counters
        counter={this.state.counters}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onReset={this.handleReset}
      />
    );
  }
}
export default StateComponent;
