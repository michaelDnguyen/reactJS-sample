import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./todolist/TodoList";
import MenuBoard from "./menu/MenuBoard";
import LoginForm from "./input/LoginForm";
import ListData from "./fetchData/ListData";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="menu-main">
          <MenuBoard />
        </div>
        <LoginForm />
        <ListData />
      </div>
    );
  }
}

export default App;
