import logo from "./logo.svg";
import "./App.css";
import UserCreate from "./components/UserCreate";
import UserLogin from "./components/UserLogin";
import FilteredData from "./components/FilteredData";
import Home from "./components/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Switch> */}
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<UserCreate />} path="/createUser" />
          <Route element={<UserLogin />} path="/loginUser">
            <Route to="/dashboard" element={<Dashboard />} />
          </Route>
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
