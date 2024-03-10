import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import Landing from "./components/Landing";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Landing />
        <Projects />
      </main>
    </div>
  );
}

export default App;
