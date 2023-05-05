import "./App.css"; //importing Main CSS file

// importing Components
import UserCreate from "./components/UserCreate";
import UserLogin from "./components/UserLogin";
import FilteredData from "./components/FilteredData";
import Home from "./components/Home";

//importing modules
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

//main functions
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Creating Routes to redirect to other components */}
        <Routes>
          <Route exact element={<Home />} path="/" />
          <Route element={<UserCreate />} path="/createUser" />
          <Route element={<UserLogin />} path="/loginUser" />
        </Routes>
      </header>
    </div>
  );
}

export default App;
