import React from "react";

const Skill = () => {
  return (
    <div id="Skill" style={{ minHeight: "88vh" }}>
      {/* 裝卡片 */}
      <div className="container">
        {/* 前端 */}
        <div className="card">
          <div className="titlebox">
            <h4 className="d-none d-lg-block">Front-End</h4>
            <h4 className="d-block d-lg-none">F-End</h4>
          </div>
          <div className="textbox">
            <p>-HTML / CSS</p>
            <p>-Sass / SCSS</p>
            <p>-Bootstrap</p>
            <p>
              - JavaScript <br />
              (熟悉基礎及 ES6 標準)
            </p>
            <p>-React.js</p>
            <p>-串接API (Axios / Fetch)</p>
          </div>
        </div>
        {/* 後端 */}
        <div className="card">
          <div className="titlebox">
            <h4 className="d-none d-lg-block">Back-End</h4>
            <h4 className="d-block d-lg-none">B-End</h4>
          </div>
          <div className="textbox">
            <p>-Node.js</p>
            <p>-MongoDB、Mongoose</p>
            <p>
              -Node.js + Express
              <br />
              建置RESTful API
            </p>
          </div>
        </div>
        {/* 其他 */}
        <div className="card">
          <div className="titlebox">
            <h4>Other</h4>
          </div>
          <div className="textbox">
            <p>
              -Netlify + Heroku
              <br />
              GitHub Pages
              <br />
              部署網頁
            </p>

            <p>-使用Git進行版本控制</p>
            <p>-使用Postman進行API測試</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
