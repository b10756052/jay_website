import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  // 用來接當前位置的state
  let [position, setPosition] = useState("HomePage");

  // scrollPosition當中會用到，先定義起來放
  let HomePage;
  let AboutPage;
  let SkillPage;
  let ProjectPage;
  let ContactPage;
  // 根據畫面位置變更position state的字串
  const scrollPosition = () => {
    HomePage = document.querySelector("#HomePhoto");
    AboutPage = document.querySelector("#About");
    SkillPage = document.querySelector("#Skill");
    ProjectPage = document.querySelector("#Project");
    ContactPage = document.querySelector("#Contact");
    // 以下數字88是nav的offsetHeight
    if (
      // HomePage位置判斷
      window.scrollY >= HomePage.offsetTop &&
      window.scrollY < AboutPage.offsetTop - 88
    ) {
      setPosition("HomePage");
    } else if (
      // AboutPage位置判斷
      window.scrollY >= AboutPage.offsetTop - 88 &&
      window.scrollY < SkillPage.offsetTop - 88
    ) {
      setPosition("AboutPage");
    } else if (
      // SkillPage位置判斷
      window.scrollY >= SkillPage.offsetTop - 88 &&
      window.scrollY < ProjectPage.offsetTop - 88
    ) {
      setPosition("SkillPage");
    } else if (
      // ProjectPage位置判斷
      window.scrollY >= ProjectPage.offsetTop - 88 &&
      window.scrollY < ContactPage.offsetTop - 88
    ) {
      setPosition("ProjectPage");
    } else if (
      // ContactPage位置判斷
      window.scrollY >=
      ContactPage.offsetTop - 88
    ) {
      setPosition("ContactPage");
    }
  };

  // 根據導覽列是否在網頁最上方來切換導覽列樣式
  let nav;
  const changeNavStyling = () => {
    nav = document.querySelector("nav");
    if (window.scrollY !== 0) {
      nav.classList.add("scrollNotTop");
    } else {
      nav.classList.remove("scrollNotTop");
    }
  };

  // 以下兩個為根據ChatGBT進行改寫的useEffect
  useEffect(() => {
    // 執行 判斷網頁當前在哪個頁面來切換navlink的active class 的function
    const handleActiveScroll = () => {
      scrollPosition();
    };
    window.addEventListener("scroll", handleActiveScroll);

    // 執行 判斷nav是不是在最上面來切換 的Function
    const handleNavChangeStyle = () => {
      changeNavStyling();
    };
    window.addEventListener("scroll", handleNavChangeStyle);

    return () => {
      // useEffect卸載時將兩個scroll監聽器都清除掉
      window.removeEventListener("scroll", handleActiveScroll);
      window.removeEventListener("scroll", handleNavChangeStyle);
    };
  }, []);

  // 當position state一變動時，便切換導覽列選項active狀態
  useEffect(() => {
    const setActiveClass = (elementId) => {
      const oldActiveElement = document.querySelector(".active");
      if (oldActiveElement) oldActiveElement.classList.remove("active");

      const newActiveElement = document.querySelector(elementId);
      if (newActiveElement) {
        newActiveElement.classList.add("active");
      }
    };

    if (position === "HomePage") {
      setActiveClass("#navAHome");
    } else if (position === "AboutPage") {
      setActiveClass("#navAAbout");
    } else if (position === "SkillPage") {
      setActiveClass("#navASkill");
    } else {
      setActiveClass("#navAProject");
    }
    // else if (position === "ProjectPage") {
    //   setActiveClass("#navAProject");
    // }
    // else if (position === "ContactPage") {
    //   setActiveClass("#navAContact");
    // }
  }, [position]);

  // 原本的判斷網頁position的funciont 觸發方式 (是根據毫秒且重複觸發而並不是根據scroll來觸發，且觸發後沒有內建卸載機制，綜合上述兩點會導致性能浪費)
  // // 利用setTimeout搭配遞迴來取代setInterval重複執行function的效果，改善時間一久，網頁會卡頓的問題
  // let CallPosition = () => {
  //   scrollPosition();
  //   setTimeout(CallPosition, 250);
  // };
  // // 第一次呼叫CallPosition時，先晚200毫秒再呼叫，否則會因為scrollPosition還沒抓到DOM而報錯
  // setTimeout(CallPosition, 200);

  return (
    <div id="NavBar" class="fixed-top">
      <nav class="navbar navbar-expand-lg w-100 p-4 fixed-top navbar-dark">
        <div class="container-fluid ">
          <Link
            id="navA"
            class="navbar-brand"
            to="HomePhoto"
            duration={150}
            smooth={true}
          >
            JayResume
          </Link>
          {/* 手機nav bar button */}
          <button
            class="navbar-toggler navBarButton"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav align-items-center ">
              <Link
                id="navAHome"
                duration={150}
                smooth={true}
                class="nav-link mx-2 py-1 text-center"
                aria-current="page"
                to="HomePhoto"
                // offset={-87}
              >
                Home
              </Link>
              <Link
                id="navAAbout"
                duration={150}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center "
                to="About"
              >
                About
              </Link>
              <Link
                id="navASkill"
                duration={150}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center"
                to="Skill"
              >
                Skill
              </Link>{" "}
              <Link
                id="navAProject"
                duration={150}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center"
                to="Project"
              >
                Project
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
