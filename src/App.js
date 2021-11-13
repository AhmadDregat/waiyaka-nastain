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
        <Route key="login" path="/" element={<Login />} />
        
        <Route key="dashBord" path="DashBord" element={<DashBord />}>
            <Route key="news" path=":component" element={<DashBord />} />
            
            {/* <Route key="Mesbaha" path="/:component" element={<Mesbaha />} />
            <Route
              key="relations"
              path="relations/:relation"
              element={<Relations />}
            />
            <Route key="DashBord" path="homepage" element={<Home />} /> */}
        </Route>

      
         
          
        {/* <Route key="homePage" path="/homePage" element={<Home />} /> */}
        {/* <Route
          key="relations"
          path="/relations/:relation"
          element={<Relations />}
        /> */}
        {/* <Route key="news" path="/news" element={<News />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
