import "./App.css";
import Contakts from "./Contakts/Contakts";
import Header from "./Header/Header";
import React, { useState } from "react";

const Home = React.lazy(() => import("../components/Home/Home"));
const OurServices = React.lazy(() =>
  import("../components/OurServices/OurServices")
);
const App = () => {
  const [language, setLanguage] = useState("ua");
  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <div id="home">
        <Home language={language} />
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
