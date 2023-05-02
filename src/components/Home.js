import { React } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hello and welcome to this Project Created by : </h1>
      <h1>Aashutosh Verma</h1>{" "}
      <div id="links">
        <Link to={"/loginUser"}> User Login</Link>
        <Link to={"/createUser"}> Create User</Link>
      </div>
    </div>
  );
};

export default Home;
