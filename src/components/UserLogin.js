import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserLogin extends Component {
  constructor() {
    super();

    this.state = {
      // isLoggedin: false,
      email: "",
      password: "",
      loginSuccessful: false,
    };

    // localStorage.setItem("check", this.state.isLoggedin);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    alert(`${email} ${password}`);
    fetch("http://localhost:5000/UserLogin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status === "ok") {
          console.log("login Successful");
          this.setState({
            loginSuccessful: true,
            username: data.username,
            email: data.email,
          });
        }
      });
    // console.log(localStorage.getItem("check"));
  }
  render() {
    return this.state.loginSuccessful ? (
      <div>
        <h1>Login Successful</h1>
        <h2>Username : {this.state.username}</h2>
        <h2>Email : {this.state.email}</h2>
      </div>
    ) : (
      <div className="loginContainer">
        <h1 className="formHeading">User Login</h1>
        <form onSubmit={this.handleSubmit}>
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
          <button id="button" type="submit">
            Submit
          </button>
          <h1>{this.state.loginSuccessful}</h1>
        </form>
        <Link to={"/"}>Back</Link>
      </div>
    );
  }
}

export default UserLogin;
