import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/style.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
