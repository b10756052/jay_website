import React from "react";
import ResumePhoto from "../pictures/resume.jpg";

const About = () => {
  // 按鈕按下切換顯示的文字區塊
  const ChangeText = () => {
    document.querySelector(".change1").classList.toggle("open");
    document.querySelector(".change2").classList.toggle("open");
  };

  return (
    <div
      id="About"
      className="position-relative container d-flex align-items-center  "
      style={{
        minHeight: "88vh",
        // backgroundImage:
        //   "url(https://images.unsplash.com/photo-1515549832467-8783363e19b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80)",
      }}
    >
      <div
        style={{ minHeight: "75vh" }}
        className="row g-0 flex-row-reverse px-5 py-3 pb-5 p-md-5  "
      >
        {/* 圖片區 */}
        <div className="col-md-4 py-3 py-md-0 d-flex">
          <img
            src={ResumePhoto}
            className="w-100  object-fit-cover rounded-3"
          />
        </div>
        {/* 文字區 */}
        <div className=" col-md-8 py-3 text-center text-md-start d-flex  justify-content-center flex-column">
          <div className="change1 hidden open">
            <h2 className="mb-4">About me：</h2>
            <h3 className="ms-1 mb-3 d-md-none text-start">
              - 蘇志傑；屏科資管系
            </h3>
            <h3 className="ms-1 mb-3 d-md-none text-start">
              - 對前端擁有強烈熱情
            </h3>

            <h3 className="mb-3 mb-md-4 d-none d-md-flex text-start">
              - 蘇志傑
            </h3>

            <h3 className="mb-3 mb-md-4 d-none d-md-flex text-start">
              - 國立屏科大資管系
            </h3>
            <h3 className="ms-1 ms-md-0 mb-3 mb-md-4 text-start">
              - 性格樂觀、善於溝通
            </h3>
            <h3 className="ms-1 mb-3 d-md-none text-start ">
              - 培養獨立思考能力
            </h3>
            <h3 className="ms-1 mb-3 d-md-none text-start">- 喜歡挑戰</h3>
            <h3 className="mb-4 d-none d-md-block ">
              - 喜歡挑戰、培養獨立思考、自主解決問題能力
            </h3>
            <h3 className="mb-4 d-none d-md-block">
              - 好奇心重，對前端擁有強烈熱情，持續吸收新知
            </h3>
          </div>

          <div className="change2 hidden">
            <h3 className="text-start d-none d-md-flex">- 前端之路</h3>
            <h3 className="text-center  d-md-none ">《前端之路》</h3>
            <p className="ms-1 w-90 text-start d-none d-md-flex">
              學校在大一時，雖然有開設網頁相關的課程，但課程教授的內容僅停留在基礎的皮毛，所以在當時對網頁開發領域其實沒有產生實質興趣。真正對前端產生興趣的時間點，是在大三系上開始準備專題的時期，雖然我在組別分工當中被分配到的不是網頁開發的相關工作，但看到組員在開會中展現做出來的頁面，雖然現在回想，只是由HTML、CSS所簡單構成的靜態頁面，但在當時讓我感到非常驚艷，於是很激動的向組員請教，最終在被推坑網頁開發的線上課程後，就這樣踏入了前端世界！
            </p>
            <p className="w-100 ms-2 text-start d-flex d-md-none">
              真正對前端產生興趣的時間點，是在大三時，系上開始準備專題的時期，雖然我在組別分工當中分配到的工作不是網頁開發領域的相關，但看到組員在開會中展現他做出來的頁面，雖然現在回想，只是由HTML、CSS所簡單構成的靜態頁面，但當時讓我感到非常驚艷，於是在空閒之餘，很激動的向組員請教，最終在被組員推坑網頁開發的線上課程後，跟著一起踏入了前端世界！
            </p>
            <h3 className="text-start d-none d-md-flex">- 未來展望</h3>
            <h3 className="text-center  d-md-none">《未來展望》</h3>
            <p className="ms-1  w-90 text-start d-none d-md-flex">
              目前所學較偏向於前端，然而在利用線上資源學習時，發現對後端相關技術也沒有產生排斥感，但本著學習應該先深再廣的學習理念，所以規劃在前端的技術較為精熟之後，開始連後端一起發展，慢慢往全端靠攏，成為全端工程師！
            </p>
            <p className="w-100 ms-2  text-start d-flex d-md-none">
              規劃在前端技術精熟之後，開始連後端一起發展，往全端靠攏，成為全端工程師！
            </p>
          </div>

          <button
            type="button"
            id="AboutButton"
            className="btn btn-md btn-outline-secondary w-100  w-md-90  mt-3  my-md-3"
            onClick={ChangeText}
          >
            Change Pages
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
