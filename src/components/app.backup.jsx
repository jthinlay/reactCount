import React, { Component } from "react";
import Navbar from "./components/navbar";
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
  handleIncrement = product => {
    const incrementCounters = [...this.state.counters];
    const index = incrementCounters.indexOf(product);
    incrementCounters[index] = { ...product };
    incrementCounters[index].value++;
    this.setState({ counters: incrementCounters });
  };
  handleDecrement = product => {
    const decrementCounters = [...this.state.counters];
    const index = decrementCounters.indexOf(product);
    decrementCounters[index].value--;
    this.setState({ counters: decrementCounters });
  };
  handleDelete = d => {
    const deleteCounters = this.state.counters.filter(c => c.id !== d);
    this.setState({ counters: deleteCounters });
  };
  handleReset = () => {
    const resetCounters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: resetCounters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          subtotalCounters={this.state.counters.length}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
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
