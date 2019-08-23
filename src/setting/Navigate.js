import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import RightMenu from "../menu/RightMenu";
import { Drawer, Button } from "antd-mobile";
import { white } from "ansi-colors";

export default class Navigate extends Component {
  state = {
    current: "mail",
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const styleBar = {
        color: #fff,
    };

    return (
      <div>
        <nav className="menuBar">
          <div className="logo">
            <NavLink className="navbar navbar-light bg-danger" to="/">
              <p style={styleBar}>Trang chủ</p>
            </NavLink>
          </div>
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn" />
          </Button>
          <Drawer
            title="Basic Drawer"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <RightMenu />
          </Drawer>
        </nav>
      </div>
    );
  }
}
