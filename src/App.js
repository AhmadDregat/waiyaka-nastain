import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import DashBord from "./components/DashBord";

function App() {
  return (
    <Router>
      <Routes>
        <Route key="login" path="/" element={<Login />} />

        <Route key="dashBord" path="DashBord" element={<DashBord />}>
          <Route key="news" path=":component" element={<DashBord />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
