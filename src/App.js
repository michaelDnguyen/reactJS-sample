import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoList from "./todolist/TodoList";
import MenuBoard from "./menu/MenuBoard";
import LoginForm from "./input/LoginForm";
import ListData from "./fetchData/ListData";

import { connect } from "react-redux";
import { load } from "./comment";

//connect decorator
@connect(
  state => ({
    //trả về kết quả đã nhận bằng reducer vào props
    comments: state.comment.comments
  }),
  //chỉ định action
  { load }
)
export default class App extends Component {
  componentWillMount() {
    //kick action của comment
    this.props.load;
  }

  render() {
    //state đã lấy được bằng connect sẽ ở trong props
    const { comments } = this.props;
    //lần đầu null được trả về, sau khi xử lý thì kết quả được trả về
    console.load(comments);

    return (
      <div className="App">
        <div>{this.comments}</div>
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
