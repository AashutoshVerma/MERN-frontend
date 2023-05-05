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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
    // alert(`${email} ${password}`);
    fetch(
      "https://mern-backend-ltn6bgxgm-aashutoshverma.vercel.app/UserLogin",
      {
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
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.error(data.error);
        if (data.status === "ok") {
          console.log("login Successful");

          toast.success("Login Success!!", { autoClose: 3000 });
          setTimeout(() => {
            this.setState({
              loginSuccessful: true,
              username: data.username,
              email: data.email,
            });
          }, 3000);
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
            type="email"
            required
            placeholder="Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>

          <input
            id="password"
            placeholder="Password"
            type="password"
            required
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
          <button id="button" type="submit">
            Submit
          </button>
          <h1>{this.state.loginSuccessful}</h1>
        </form>
        <br />
        <Link className="backButton" to={"/"}>
          Back
        </Link>
        <ToastContainer limit={1} />
      </div>
    );
  }
}

export default UserLogin;
