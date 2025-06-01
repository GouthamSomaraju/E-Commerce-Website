import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Your home or dashboard route */}
        <Route path="/" element={<h1>Welcome Home</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
