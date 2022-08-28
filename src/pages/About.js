import React from "react";
import ResumePhoto from "../pictures/resume.jpg";

const About = () => {
  return (
    <div
      id="About"
      className="container d-flex align-items-center"
      style={{ minHeight: "88vh" }}
    >
      <div
        style={{ minHeight: "75vh" }}
        className="row g-0 flex-row-reverse px-5 py-3 pb-5 p-md-5 "
      >
        {/* 圖片區 */}
        <div className="col-md-4 py-3 py-md-0 d-flex">
          <img src={ResumePhoto} className="w-100  object-fit-cover" />
        </div>
        {/* 文字區 */}
        <div className="col-md-8 py-3 text-center text-md-start d-flex  justify-content-center flex-column">
          <h2 className="mb-4">About me：</h2>
          <h3 className="mb-3 d-md-none text-start">- 對前端擁有強烈熱情</h3>
          <h3 className="mb-3 mb-md-4 text-start">- 性格樂觀、善於溝通</h3>
          <h3 className="mb-3 d-md-none text-start ">- 培養獨立思考能力</h3>
          <h3 className="mb-3 d-md-none text-start">- 喜歡挑戰</h3>
          <h3 className="mb-4 d-none d-md-block ">
            - 喜歡挑戰、培養獨立思考、自主解決問題能力
          </h3>
          <h3 className="mb-4 d-none d-md-block">
            - 好奇心重，對前端擁有強烈熱情，持續吸收新知
          </h3>
          <button
            id="AboutButton"
            className="btn btn-md btn-outline-primary w-100  w-md-90  mt-3  my-md-3"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
