import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./input.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isRemember: false
    };
  }

  myChangeHandle = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  mySubmit = () => {
    alert("Just input " + this.state.email + " -- " + this.state.password);
  };

  render() {
    return (
      <Form className="form-login">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email hoặc mã số</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={this.myChangeHandle}
            placeholder="Nhập email"
          />
          <Form.Text className="text-muted">
            Chúng tôi sẽ không chia sẻ email của bạn với bất kỳ ai.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={this.myChangeHandle}
            placeholder="Nhập mật khẩu"
          />
        </Form.Group>

        <Form.Group controlId="formBasicChecbox">
          <Form.Check
            className="item-align"
            type="checkbox"
            name="isRemember"
            onChange={this.myChangeHandle}
            label="Nhớ mật khẩu"
          />
        </Form.Group>

        <Button
          className="button-primary"
          variant="primary"
          type="submit"
          onClick={this.mySubmit}
        >
          Đăng nhập
        </Button>
      </Form>
    );
  }
}
