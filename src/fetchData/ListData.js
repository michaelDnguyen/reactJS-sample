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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("Data load: " + res.json);
        return res.json;
      })
      .then(res => {
        this.setState({

          users: res,
          loading: false
        });
        console.log("Data load: " + this.state.users);
      })
      .catch(console.log);
  }

  render() {
    const { userList } = this.state.users.map((user, index) => (
      <div key={index} className="card">
        <div className="card-body">
          <h5>{user.username}</h5>
          <h6>{user.name}</h6>
          <h6>{user.email}</h6>
          <h6>
            {user.address.suite +
              " " +
              user.address.street +
              " " +
              user.address.city}
          </h6>
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
