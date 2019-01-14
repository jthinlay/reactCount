import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import About from "./about";
import NavBar from "./navbar";
import DisplayCounter from "./displayCounter";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route exact path="/about" component={About} />
            <Route exact path="/Counter" component={DisplayCounter} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Router;
