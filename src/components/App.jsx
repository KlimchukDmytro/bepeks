import "./App.css";
import Header from "./Header/Header";
import React, { useState } from "react";

const Home = React.lazy(() => import("../components/Home/Home"));
const OurServices = React.lazy(() =>
  import("../components/OurServices/OurServices")
);
const OurAdvantages = React.lazy(() =>
  import("../components/OurAdvantages/OurAdvantages")
);
const Contacts = React.lazy(() => import("./Contacts/Contacts"));

const App = () => {
  const [language, setLanguage] = useState("ua");
  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <div id="home">
        <Home language={language} />
      </div>
      <div id="ourServices">
        <OurServices language={language} setLanguage={setLanguage} />
      </div>
      <div id="ourAdvantages">
        <OurAdvantages language={language} setLanguage={setLanguage} />
      </div>
      <div id="contacts">
        <Contacts language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
};

export default App;
