import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBord from "./components/DashBord";
function App() {
  return (
    <Router>
      <Routes>
        <Route key="dashBord" path="/" element={<DashBord />}>
          <Route key="news" path=":component" element={<DashBord />}>
            <Route key="news" path=":relation" element={<DashBord />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
