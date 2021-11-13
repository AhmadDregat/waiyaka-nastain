import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Relations from "./components/Relations";
import News from "./components/News";
import DashBord from "./components/DashBord";
import Mesbaha from "./components/Mesbaha";

function App() {
  return (
    <Router>
      <Routes>
        <Route key="dashBord" path="/" element={<DashBord />}>
            <Route key="news" path=":component" element={<DashBord />}>
              <Route key="news" path=":relation" element={<DashBord />}/>
            </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
