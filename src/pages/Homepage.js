import React from "react";

const Homepage = () => {
  return (
    <div
      id="HomePhoto"
      class="position-relative "
      style={{ minHeight: "100vh", position: "relative" }}
    >
      {/* 圖片 */}
      <div
        id="homepagePCDisplay"
        style={{
          top: "0vh",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
          backgroundPosition: "center",
          zIndex: "-999999",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80)",
        }}
      >
        {/* mask */}
        <div
          className="w-100 h-100"
          style={{ zIndex: "1000", backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>
      </div>

      <div
        style={{ zIndex: 1000 }}
        className="position-absolute top-50 start-50 w-75 translate-middle text-center  text-white"
      >
        {/* rgb(229 224 222) */}
        <h1 style={{ color: "white", fontSize: "5.75vh" }}>Jay Su</h1>
        <hr
          className="my-0 my-md-25"
          style={{ borderTop: "4.5px solid white", borderRadius: "20%" }}
        />
        <p style={{ color: "white", fontSize: "4vh" }} className="d-lg-none">
          蘇志傑
        </p>
        <p
          style={{ color: "white", fontSize: "3.8vh" }}
          className="d-none d-lg-block text-nowrap "
        >
          偶然契機踏入前端世界便深深著迷的準開發者！
        </p>
      </div>
    </div>
  );
};

export default Homepage;
