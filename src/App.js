import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//@Componentes
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
