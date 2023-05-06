import { React } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="loginContainer">
      <div className="homePageText">
        <h1 className="homePageHeading">
          Hello and welcome to this Project Created by :{" "}
        </h1>
        <h1 className="homePageHeading">Aashutosh Verma</h1>{" "}
      </div>
      <div id="links">
        <Link to={"/loginUser"}> User Login</Link>
        <Link to={"/createUser"}> Create User</Link>
      </div>
    </div>
  );
};

export default Home;
