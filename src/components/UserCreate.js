import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";

class UserCreate extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: "",
      userCreated: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    alert(`${username} ${email}`);
    fetch("http://localhost:5000/UserCreate", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.userCreated = true;
      });
  }
  render() {
    return this.userCreated ? (
      <UserLogin />
    ) : (
      <div className="loginContainer">
        <h1 className="formHeading"> Create New User</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="username"
            placeholder="Username"
            onChange={(event) => {
              this.setState({ username: event.target.value });
            }}
          ></input>
          <input
            id="email"
            placeholder="Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
          <input
            id="password"
            placeholder="Password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
          {/* Here I need to navigate to Login page also wanted to call handleSubmit on click of  button */}
          <button id="button" type="submit">
            <Link to={"/LoginUser"}>Submit</Link>
          </button>
        </form>
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}

export default UserCreate;
