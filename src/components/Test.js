import axios from "axios";
import React, { useEffect, useState } from "react";

function Test() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getAllUser")
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
  );
}

export default Test;
