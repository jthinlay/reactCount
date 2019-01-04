import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleIncrement = value => {
    const incrementCounters = [...this.state.counters];
    const index = incrementCounters.indexOf(value);
    incrementCounters[index].value++;
    this.setState({ counters: incrementCounters });
  };
  handleDecrement = value => {
    const decrementCounters = [...this.state.counters];
    const index = decrementCounters.indexOf(value);
    decrementCounters[index].value--;
    this.setState({ counters: decrementCounters });
  };
  handleDelete = id => {
    const deleteCounters = this.state.counters.filter(ccc => ccc.id !== id);
    this.setState({ counters: deleteCounters });
  };
  handleReset = () => {
    const resetCounters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: resetCounters });
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <NavBar
            totalCounters={
              this.state.counters.filter(ccc => ccc.value > 0).length
            }
          />
          <button className="btn m-2 btn-warning" onClick={this.handleReset}>
            RESET
          </button>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
