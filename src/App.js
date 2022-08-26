import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/style.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <About />
      <Footer />
    </div>
  );
}

export default App;
