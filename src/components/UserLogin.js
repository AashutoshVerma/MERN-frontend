//importing modules
import React, { Component } from "react";
import { Link } from "react-router-dom";

//importing Dashboard
import Dashboard from "./Dashboard";

//importing Toast and its predefined CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

//Creating main Class Component
class UserLogin extends Component {
  constructor() {
    super();

    //defining State
    this.state = {
      email: "",
      password: "",
      loginSuccessful: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this); //binding handleSubmit function
  }

  // this function will be called when the submit button is clicked.
  handleSubmit(e) {
    e.preventDefault(); //this avoid instant refreshing page.

    // desctructuring states created earlier.
    const { email, password } = this.state;

    //fetching the API and sending the data for creation of user to the backend.

    fetch(
      "https://mern-backend-ltn6bgxgm-aashutoshverma.vercel.app/UserLogin",
      {
        //defining headers for the request.
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },

        //defining Body for the request.

        body: JSON.stringify({
          email,
          password,
        }),
      }
    )
      .then((res) => res.json()) // Promise of API
      .then((data) => {
        toast.error(data.error); //Display  erros msg 'User Exists'.

        //checking if data received from the API successfully, through status
        if (data.status === "ok") {
          console.log("login Successful");

          toast.success("Login Success!!", { autoClose: 3000 }); //acknowledgement of successfully login

          //this function lets the toast load and make it visible for the user to see. after 3 second it changes the userCreated State.
          setTimeout(() => {
            this.setState({
              loginSuccessful: true,
              username: data.username,
              email: data.email,
            });
          }, 3000);
        }
      });
  }

  //rendering Component
  render() {
    //here we check if the user visits this component for the first time, it will reflect UserLogin component, after submitting, loginSuccessful state will become true and the user will be redirected to Dashboard Component.

    return this.state.loginSuccessful ? (
      <div>
        <Dashboard />
      </div>
    ) : (
      //Input Elements for login Component
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
          {/* Final Login Button */}
          <div className="loginFooter">
            <button id="loginButton" type="submit">
              Submit
            </button>
            {/* Back button to navigate Back to Home Component */}
            <Link className="backButton" to={"/"}>
              Back
            </Link>
            {/* Toast Wrapper component */}
            <ToastContainer limit={1} />
          </div>
        </form>
      </div>
    );
  }
}

export default UserLogin;
