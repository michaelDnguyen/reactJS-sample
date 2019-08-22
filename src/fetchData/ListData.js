import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ListData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch("https://my-json-server.typicode.com/michaelDnguyen/MyRestAPI/users")
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          users: result,
          loading: false
        });
        console.log("Data state: " + this.state.users);
      })
      .catch(console.log);
  }

  render() {
    const userList = this.state.users.map((user, index) => (
      <div key={index} className="card" >
        <div className="card-body">
          <h5>Username: {user.username}</h5>
          <h6>FullName: {user.name}</h6>
          <h6>Email: {user.email}</h6>
          <h6>Phone: {user.phone}</h6>
        </div>
      </div>
    ));

    if (this.state.loading) {
      return <div>Loading...</div>;
    }
    if (this.state.users.length === 0) {
      return <div>Không có item nào.</div>;
    }

    return (
      <div>
        <h4>Data loader</h4>
        <div>{userList}</div>
      </div>
    );
  }
}

export default ListData;
