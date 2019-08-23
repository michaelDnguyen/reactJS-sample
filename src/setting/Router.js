import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import CONST from "../constant/contasnt";

import NotFound from "./NotFound";
import LoginForm from "../input/LoginForm";
import ListData from "../fetchData/ListData";
import MenuBoard from "../menu/MenuBoard";

class Router extends Component {
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
