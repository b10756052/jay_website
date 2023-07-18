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
  // 當點擊contact Circle到外面的範圍來關閉contact Circle(觸發contactCircle.classList.toggle)
  document.addEventListener("click", (e) => {
    // 判斷點的位置是不是已經開啟的contact Circle裡面，如果是的話就取消這次點擊
    if (e.target.classList.contains("madeFocus")) return;
    // 如果不是的話就關掉聯絡表單
    // const contactCircle = document.querySelector(".madeFocus");
    const contactCircle = document.querySelector("#Contact");
    contactCircle.children[1].classList.remove("madeFocusForm");
    contactCircle.children[0].classList.remove("madeFocusSvg");
    contactCircle.classList.remove("madeFocus");

    // 判斷點的位置是不是處在打開的手機板navbar，如果為否而且手機板navbar處於打開狀態，就把navbar關掉
    const navbar = document.querySelector("#navbarNavAltMarkup");
    const allNavlinksBox = document.querySelector(".navbar-nav");
    if (navbar.classList.contains("show") && e.target != allNavlinksBox)
      return document.querySelector(".navBarButton").click();
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
    </div>
  );
}

export default App;
