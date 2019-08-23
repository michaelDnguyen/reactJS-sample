import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Link, BrowserRouter } from "react-router-dom";

import Navigate from "./setting/Navigate";
import Router from "./setting/Router";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div>{comments}</div> */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}

        <BrowserRouter>
          <Navigate />
          <Router />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
