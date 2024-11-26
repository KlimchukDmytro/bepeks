import "./App.css";
import Contakts from "./Contakts/Contakts";
import Header from "./Header/Header";
import React from "react";

const Home = React.lazy(() => import("../components/Home/Home"));
const Abaut = React.lazy(() => import("../components/About/About"));
const App = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <Abaut />
      </div>
      <div id="contakts">
        <Contakts />
      </div>
    </div>
  );
};

export default App;
