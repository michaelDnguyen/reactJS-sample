import React,{Component} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./input.css"

export default class LoginForm extends Component {

  render(){
    return (
      <Form className="form-login">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group controlId="formBasicChecbox">
        <Form.Check className="item-align" type="checkbox" label="Check me out" />
      </Form.Group>

      <Button className="button-primary" variant="primary" type="submit">
        Submit
      </Button>
      </Form>
    );
  }
}
