import "./App.css";
import Contakts from "./Contakts/Contakts";
import Header from "./Header/Header";
import React from "react";

const Home = React.lazy(() => import("../components/Home/Home"));
const OurServices = React.lazy(() =>
  import("../components/OurServices/OurServices")
);
const App = () => {
  return (
    <div>
      <Header />
      <div id="home">
        <Home />
      </div>
      <div id="ourServices">
        <OurServices />
      </div>
      <div id="contaсts">
        <Contakts />
      </div>
    </div>
  );
};

export default App;
