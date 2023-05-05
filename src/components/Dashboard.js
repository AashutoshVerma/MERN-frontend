import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Test() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://mern-backend-ltn6bgxgm-aashutoshverma.vercel.app/getAllUser")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    // <div>
    //   {userData.map((item) => {
    //     return <div key={item._id}>{item.username}</div>;
    //   })}
    // </div>
    <div>
      <div className="dashboardHeader">
        <h1>User Data</h1>
      </div>
      <Link className="logoutButton" to={"/"}>
        Logout
      </Link>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item) => (
            <tr key={item._id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Test;
