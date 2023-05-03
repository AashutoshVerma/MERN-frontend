import React, { Component } from "react";
import {
  Link,
  Redirect,
  Routes,
  Route,
  useHistory,
  Outlet,
} from "react-router-dom";
import Dashboard from "./Dashboard";
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
    // <Routes>
    //   <Route to={"/dashboard"} element={<Dashboard />} />;
    // </Routes>;

    return this.state.loginSuccessful ? (
      <div>
        <Dashboard />
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
