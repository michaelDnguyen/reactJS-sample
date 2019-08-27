import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import * as CONST from "../constant/contasnt";

import NotFound from "./NotFound";
import LoginForm from "../input/LoginForm";
import ListData from "../fetchData/ListData";
import MenuBoard from "../menu/MenuBoard";

class Router extends Component {
  state = {
    isLogin: localStorage.getItem("isLogin") | ""
  };

  handleLogin = withRouter(({ history }) => {
    console.log("vo ham handle Login");

    if (this.state.isLogin) <Redirect to={CONST.PATH_HOME} />;
    else <Redirect to={CONST.PATH_LOGIN} />;
  });

  componentWillMount() {
    this.handleLogin();
  }

  render() {
    return (
      <Switch>
        <Route exact path={CONST.PATH_HOME} component={MenuBoard} />
        <Route exact path={CONST.PATH_LOGIN} component={LoginForm} />
        <Route exact path={CONST.PATH_LIST} component={ListData} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default withRouter(Router);
