import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // alert(`${username} ${email}`);
    fetch(
      "https://mern-backend-ltn6bgxgm-aashutoshverma.vercel.app/UserCreate",
      {
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
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, { autoClose: 3000 });
        } else {
          console.log("Data", data);
          console.log("This is state", this.state.userCreated);
          setTimeout(() => {
            this.setState({
              userCreated: true,
            });
          }, 3000);
          toast.success("User Created", { autoClose: 3000 });
        }
      });
  }
  render() {
    return this.state.userCreated ? (
      <UserLogin />
    ) : (
      <div className="loginContainer">
        <h1 className="formHeading"> Create New User</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            id="username"
            type="text"
            placeholder="Username"
            required
            onChange={(event) => {
              this.setState({ username: event.target.value });
            }}
          ></input>
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
          <input
            required
            id="password"
            placeholder="Password"
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
          {/* Here I need to navigate to Login page also wanted to call handleSubmit on click of  button */}
          <button id="button" type="submit">
            {/* <Link to={"/LoginUser"}>Submit</Link> */}
            Submit
          </button>
        </form>
        <br />
        <Link className="backButton" to={"/"}>
          Back
        </Link>
        <ToastContainer position="top-right" limit={1} />
      </div>
    );
  }
}

export default UserCreate;
