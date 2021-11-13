import { React, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Home from "./Home";
import Relations from "./Relations";
import News from "./News";
import BorgerBar from "./BorgerBar";
import Mesbaha from "./Mesbaha";
import Footer from "./Footer";

function DashBord() {
  const { component } = useParams();
  useEffect(() => {
    console.log(component);
  }, []);

  function comp() {
    switch (component) {
      case "news":
        return <News />;
        break;
      case "Mesbaha":
        return <Mesbaha />;
        break;
      default:
        return <Home />;
    }
    if (component === "news") {
    } else {
      return <Home />;
    }
  }
  //ction news() {
  //   return (
  //     <>
  //       <BorgerBar />
  //       <div className="dash">
  //         <News />
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }
  // // function Mesbaha() {}
  // // function tsabeh() {}
  // function Home() {
  //   return (
  //     <>
  //       <BorgerBar />
  //       <div className="dash">
  //         <Home />
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }

  return (
    <>
      <BorgerBar />
      <div className="dash">{comp()}</div>
      <Footer />
    </>
  );
}

export default DashBord;
