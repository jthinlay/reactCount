import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/routers";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Router />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
