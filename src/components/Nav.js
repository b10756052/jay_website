import React from "react";
import { Link } from "react-scroll";

const Nav = () => {
  let nav;

  // 這樣抓出來的elements的style才不為null
  setTimeout(() => {
    nav = document.querySelector("nav");
  }, 10);
  // 導覽列下滑樣式變化
  window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
      nav.style.backgroundColor = "rgba(0,0,0,1)";
      nav.style.boxShadow = "3px 1px 3px rgba(255,255,255,0.3)";
    } else {
      nav.style = "";
    }
  });

  // 導覽列active狀態切換
  const navClick = (e) => {
    let navA = document.querySelectorAll("a");
    navA.forEach((Link) => {
      Link.classList.remove("active");
    });
    e.target.classList.toggle("active");
  };

  return (
    <div id="NavBar" class="fixed-top">
      <nav class="navbar navbar-expand-lg w-100 p-4 fixed-top navbar-dark">
        <div class="container-fluid ">
          <Link
            id="navA"
            // style={{ color: "rgb(229 224 222)" }}
            class="navbar-brand"
            to="HomePhoto"
            smooth={true}
          >
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
            class="collapse navbar-collapse justify-content-end "
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav ">
              <Link
                id="navA"
                smooth={true}
                // class="nav-link active mx-3"
                class="nav-link  mx-3"
                // aria-current="page"
                to="HomePhoto"
                onClick={navClick}
              >
                Home
              </Link>
              <Link
                id="navA"
                smooth={true}
                offset={-87}
                class={`nav-link mx-3 `}
                to="About"
                onClick={navClick}
              >
                About
              </Link>
              <a id="navA" class="nav-link mx-3" href="#">
                Skill
              </a>{" "}
              <a id="navA" class="nav-link mx-3 ">
                Project
              </a>
              <a id="navA" class="nav-link mx-3 ">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
