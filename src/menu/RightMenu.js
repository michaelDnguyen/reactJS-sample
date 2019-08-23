import React, { Component } from "react";
import { Menu, Icon } from "antd-mobile";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <a href="">Đăng nhập</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="">Đăng ký</a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;
