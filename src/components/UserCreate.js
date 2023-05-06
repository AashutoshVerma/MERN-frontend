//importing modules
import React, { Component } from "react";
import { Link } from "react-router-dom";

//importing Login Component
import UserLogin from "./UserLogin";

//importing Toast modules and its pre-defined CSS
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component for Creating User
class UserCreate extends Component {
  constructor() {
    super();

    //creating States
    this.state = {
      username: "",
      email: "",
      password: "",
      userCreated: false, //this state will handle the condition if the user is created or not, if created it will allow to redirect to Login page.
    };
    this.handleSubmit = this.handleSubmit.bind(this); //binding handleSubmit funtion
  }

  // this function will be called when the submit button is clicked.
  handleSubmit(e) {
    e.preventDefault(); // this avoid instant refreshing page.
    const { username, email, password } = this.state; //desctructuring states created earlier.

    //fetching the API and sending the data for creation of user to the backend.
    fetch(
      "https://mern-backend-ltn6bgxgm-aashutoshverma.vercel.app/UserCreate",
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
          username,
          email,
          password,
        }),
      }
    )
      .then((res) => res.json()) //promise of the API.
      .then((data) => {
        //error handling during gettting data from the response from server.
        if (data.error) {
          toast.error(data.error, { autoClose: 3000 }); //Display  erros msg 'User Exists'.
        } else {
          // console.log("Data", data);
          // console.log("This is state", this.state.userCreated);

          //this function lets the toast load and make it visible for the user to see. after 3 second it changes the userCreated State.
          setTimeout(() => {
            this.setState({
              userCreated: true,
            });
          }, 3000);
          toast.success("User Created", { autoClose: 3000 }); //toast for acknowledgement of successful creation of user.
        }
      });
  }

  //rendering Component.
  render() {
    //here we check if the user visits this component for the first time, it will reflect userCreate component, after submitting, userCreate state will become true and the user will be redirected to Login Component.
    return this.state.userCreated ? (
      <UserLogin />
    ) : (
      //input elements for the component.
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
          <div className="createUserFooter">
            {/* //final submitting button */}
            <button id="button" type="submit">
              Submit
            </button>
            <br />
            {/* Button for navigating Back to home Component.  */}
            <Link className="backButton" to={"/"}>
              Back
            </Link>
            {/* Toast Wrapper Function */}
            <ToastContainer position="top-right" limit={1} />
          </div>
        </form>
      </div>
    );
  }
}
//exporting Component.
export default UserCreate;
