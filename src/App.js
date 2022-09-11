import Navigation from "./Components/Navigation";
import Summary from "./Components/Summary";
import About from "./Components/About/About";
import Vision from "./Components/Vision/Vision";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Summary />
      <About />
      <Vision />
    </React.Fragment>
  );
}

export default App;
