//importing modules
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// main component
function Test() {
  const [userData, setUserData] = useState([]);

  //UseEffect is used to load data only once, from the API.
  useEffect(() => {
    fetch("https://mern-backend-ltn6bgxgm-aashutoshverma.vercel.app/getAllUser") // API to fetch the data
      .then((response) => response.json()) //API promise.
      .then((data) => {
        setUserData(data.data); //Setting data using setData function.
        // console.log(data);
      })
      .catch((error) => console.error(error)); //error handling
  }, []);
  return (
    // Displaying Fetched Data.
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
          {/* mapping Data in order of keys */}
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
