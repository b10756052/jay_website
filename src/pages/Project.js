import React from "react";
import fakeYtScreenShot from "../pictures/fake-yt-screenshot.png";
import twIntroScreenShot from "../pictures/tw-intro-screenshot.png";
import photoWebsiteScreenShot from "../pictures/picturesWebsite-screenshot.png";
// https://codepen.io/aron-tw/pen/pLJqgE <-- 參考網址

const Project = () => {
  const OpenWebSite = (url) => {
    window.open(url);
  };

  return (
    <div id="Project" style={{ minHeight: "88vh" }}>
      <h1 className="ProjectPageTitle p-shadow">My Projects</h1>
      <div className="projectLine"></div>
      {/* Cards */}
      <div className="cardsBox">
        {/* <!-- Fake-YT --> */}
        <div class="flip">
          <div
            class="front"
            style={{
              backgroundImage: `url(${fakeYtScreenShot})`,
            }}
          >
            <h1 class="text-shadow cardFrontH1">Fake-YT</h1>
          </div>
          <div
            class="back"
            onClick={() => {
              OpenWebSite(`https://jay-fake-youtube.netlify.app/`);
            }}
          >
            {/* <h2>介紹：</h2> */}
            <p>
              MongoDB、Express、React、Node.js
              <br />
              所構成的MERN project。
            </p>
          </div>
        </div>
        {/* <!-- TW-Intro --> */}
        <div class="flip">
          <div
            class="front"
            style={{
              backgroundImage: `url(${twIntroScreenShot})`,
            }}
          >
            <h1 class="text-shadow cardFrontH1">TW-Intro</h1>
          </div>
          <div
            class="back"
            onClick={() => {
              OpenWebSite("https://b10756052.github.io/Taiwan-Intro/");
            }}
          >
            {/* <h2>介紹：</h2> */}
            <p>
              手刻切版練習
              <br />
              參照網站：
              <br />
              "THE F2E修煉精神時光屋"
              <br /> 參賽者網站
            </p>
          </div>
        </div>
        {/* <!-- PhotoWebsite --> */}
        <div class="flip">
          <div
            class="front"
            style={{
              backgroundImage: `url(${photoWebsiteScreenShot})`,
            }}
          >
            <h1 class="text-shadow cardFrontH1">Photo-API</h1>
          </div>
          <div
            class="back"
            onClick={() => {
              OpenWebSite("https://b10756052.github.io/photo-website/");
            }}
          >
            {/* <h2>介紹：</h2> */}
            <p>
              React建置、串接Pexels網站API
              <br />
              所構成的照片網站
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
