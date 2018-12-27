import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
  handleDecrement = product => {
    const decrementCounters = [...this.state.counters];
    const index = decrementCounters.indexOf(product);
    decrementCounters[index].value--;
    this.setState({ counters: decrementCounters });
  };
  handleDelete = product => {
    const deleteCounters = this.state.counters.filter(
      ccc => ccc.id !== product
    );
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
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <span>
            <button className="btn m-3 btn-warning" onClick={this.handleReset}>
              RESET
            </button>
          </span>
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
