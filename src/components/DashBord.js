import { React, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import Home from "./Home";
import News from "./News";
import BorgerBar from "./BorgerBar";
import Mesbaha from "./Mesbaha";
import Footer from "./Footer";
import Login from "./Login";
import Relations from "./Relations";
import globalstyle from "../styles/globalStyle.css";

function DashBord() {
  const { component } = useParams();
  useEffect(() => {
    console.log(component);
  }, [component]);

  function comp() {
    switch (component) {
      case "news":
        return <News />;
        break;
      case "login":
        return <Login />;
        break;
      case "Mesbaha":
        return <Mesbaha />;
        break;
      case "relations":
        return <Relations />;
        break;
      default:
        return <Home />;
    }
  }
  return (
    <div className="dash">
      <BorgerBar />
      <div className="dash">{comp()}</div>
      <Footer />
    </div>
  );
}

export default DashBord;
