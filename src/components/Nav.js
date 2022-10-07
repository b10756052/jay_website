import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Nav = () => {
  // 導覽列下滑樣式變化
  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    if (window.pageYOffset !== 0) {
      nav.classList.add("scrollNotTop");
    } else {
      nav.classList.remove("scrollNotTop");
    }
  });

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
      window.pageYOffset >= HomePage.offsetTop &&
      window.pageYOffset < AboutPage.offsetTop - 88
    ) {
      setPosition("HomePage");
    } else if (
      // AboutPage位置判斷
      window.pageYOffset >= AboutPage.offsetTop - 88 &&
      window.pageYOffset < SkillPage.offsetTop - 88
    ) {
      setPosition("AboutPage");
    } else if (
      // SkillPage位置判斷
      window.pageYOffset >= SkillPage.offsetTop - 88 &&
      window.pageYOffset < ProjectPage.offsetTop - 88
    ) {
      setPosition("SkillPage");
    } else if (
      // ProjectPage位置判斷
      window.pageYOffset >= ProjectPage.offsetTop - 88 &&
      window.pageYOffset < ContactPage.offsetTop - 88
    ) {
      setPosition("ProjectPage");
    } else if (
      // ContactPage位置判斷
      window.pageYOffset >=
      ContactPage.offsetTop - 88
    ) {
      setPosition("ContactPage");
    }
  };

  // 利用setTimeout搭配遞迴來取代setInterval重複執行function的效果，改善時間一久，網頁會卡頓的問題
  let CallPosition = () => {
    scrollPosition();
    setTimeout(CallPosition, 250);
  };
  // 第一次呼叫CallPosition時，先晚200毫秒再呼叫，否則會因為scrollPosition還沒抓到DOM而報錯
  setTimeout(CallPosition, 200);

  // 當position state一變動時，便切換導覽列選項active狀態
  useEffect(() => {
    let navA = document.querySelectorAll("a");
    navA.forEach((Link) => {
      Link.classList.remove("active");
    });
    if (position === "HomePage") {
      let navAHome = document.querySelector("#navAHome");
      navAHome.classList.toggle("active");
    } else if (position === "AboutPage") {
      let navAAbout = document.querySelector("#navAAbout");
      navAAbout.classList.toggle("active");
    } else if (position === "SkillPage") {
      let navASkill = document.querySelector("#navASkill");
      navASkill.classList.toggle("active");
    } else if (position === "ProjectPage") {
      let navAProject = document.querySelector("#navAProject");
      navAProject.classList.toggle("active");
    } else if (position === "ContactPage") {
      let navAContact = document.querySelector("#navAContact");
      navAContact.classList.toggle("active");
    }
  }, [position]);

  return (
    <div id="NavBar" class="fixed-top">
      <nav class="navbar navbar-expand-lg w-100 p-4 fixed-top navbar-dark">
        <div class="container-fluid ">
          <Link id="navA" class="navbar-brand" to="HomePhoto" smooth={true}>
            JayResume
          </Link>
          <button
            class="navbar-toggler"
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
                style={{ width: "100px" }}
                smooth={true}
                class="nav-link active mx-2 py-1 text-center"
                aria-current="page"
                to="HomePhoto"
              >
                Home
              </Link>
              <Link
                id="navAAbout"
                style={{ width: "100px" }}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center "
                to="About"
              >
                About
              </Link>
              <Link
                id="navASkill"
                style={{ width: "100px" }}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center"
                to="Skill"
              >
                Skill
              </Link>{" "}
              <Link
                id="navAProject"
                style={{ width: "100px" }}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center"
                to="Project"
              >
                Project
              </Link>
              <Link
                id="navAContact"
                style={{ width: "100px" }}
                smooth={true}
                offset={-87}
                class="nav-link mx-2 py-1 text-center"
                to="Contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
