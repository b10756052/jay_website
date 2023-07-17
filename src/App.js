import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./styles/style.css";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import MobileFooter from "./components/mobileFooter";

function App() {
  // 當點擊contact Circle到外面的範圍來關閉contact Circle(觸發contactCircle.classList.toggle)
  document.addEventListener("click", (e) => {
    // 判斷點的位置是不是已經開啟的contact Circle裡面，如果是的話就取消這次點擊
    if (e.target.classList.contains("madeFocus")) return;
    // // 如果不是的話就關掉
    const contactCircle = document.querySelector(".madeFocus");
    contactCircle.children[1].classList.remove("madeFocusForm");
    contactCircle.children[0].classList.remove("madeFocusSvg");
    contactCircle.classList.remove("madeFocus");
  });

  return (
    <div className="App">
      <Nav />
      <Homepage />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      <MobileFooter />
    </div>
  );
}

export default App;
