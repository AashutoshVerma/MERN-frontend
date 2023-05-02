import logo from "./logo.svg";
import "./App.css";
import UserCreate from "./components/UserCreate";
import UserLogin from "./components/UserLogin";
import FilteredData from "./components/FilteredData";
import Home from "./components/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Switch> */}
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route exact element={<UserCreate />} path="/createUser" />
          <Route exact element={<UserLogin />} path="/loginUser" />
        </Routes>

        {/* </Switch> */}
        {/* <Home /> */}
        {/* <UserCreate /> */}
        {/* <UserLogin /> */}
        {/* <FilteredData /> */}
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
