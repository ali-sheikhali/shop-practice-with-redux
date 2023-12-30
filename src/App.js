import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Navbar from "./components/Navbar";
import Login from "./components/pages/Login";
function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Home}  />
                <Route exact path="/cart" Component={Cart}  />
                <Route exact path="/login" Component={Login}  />
            </Routes>
        </Router>
      
    </div>
  );
}

export default App;
