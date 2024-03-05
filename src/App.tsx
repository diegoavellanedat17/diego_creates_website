import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;
