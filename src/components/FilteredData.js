import React, { useEffect, useState } from "react";
import axios from "axios";
function FilteredData() {
  const [data, setData] = useState([]);
  // const [param, setParam] = useState("");
  const [domain, setDomain] = useState("");
  const [uname, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getFilteredUser", {
        params: { uname, domain },
      })
      // .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(param);
  }, [submit]);

  const clickHandler = () => {
    setSubmit(!submit);
  };
  return (
    <div>
      <input
        placeholder="Enter Name"
        type="text"
        value={uname}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter Domain"
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button type="button" onClick={clickHandler}>
        Submit
      </button>
      {data.map((user) => {
        return (
          <div key={user._id}>
            {user.Name} {user.Email}
          </div>
        );
      })}
    </div>
  );
}

export default FilteredData;
