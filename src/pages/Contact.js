import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // 定義state之後要寄送email
  let [nameiInput, setNameInput] = useState("");
  let [emailInput, setEmailInput] = useState("");
  let [textareaInput, setTextarea] = useState("");
  // 接成功or錯誤訊息

  // emailjs 環境配置
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const sendEmailFun = async (e) => {
    e.preventDefault();
    // 設置郵件參數
    const emailParams = {
      // 寄件人email、姓名、訊息內容
      from_email: emailInput,
      from_name: nameiInput,
      message: textareaInput,
    };

    try {
      let response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        emailParams,
        USER_ID
      );
      console.log("信件寄送成功", response.status, response.text);
      // 利用按鈕顯示成功訊息
      e.target.children[3].innerText = "成功!!!";
      setTimeout(() => {
        e.target.children[3].innerText = "Send";
      }, 2000);
    } catch (err) {
      console.log("信件寄送失敗\n", err);
      // 利用按鈕顯示失敗訊息
      e.target.children[3].innerText = "失敗!!!";
      setTimeout(() => {
        e.target.children[3].innerText = "Send";
      }, 2000);
    }
    // 清空input、textarea
    for (let i = 0; i <= 2; i++) {
      e.target.children[i].value = "";
    }
  };

  return (
    <div
      onClick={(e) => {
        // 點擊contact時將定義的focus styling分別給元素加上去
        e.target.classList.add("madeFocus");
        e.target.children[0].classList.add("madeFocusSvg");
        e.target.children[1].classList.add("madeFocusForm");
      }}
      id="Contact"
      className="Contact d-lg-block"
      tabIndex="0"
    >
      <svg
        focusable="false"
        cursor="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
      </svg>
      <form
        // form submit成功時觸發sendEmailFun
        onSubmit={sendEmailFun}
        // stopPropagation這樣點form的時候才不亂觸發某些東東
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="contactForm"
      >
        <input
          onChange={(e) => {
            setNameInput(e.target.value);
          }}
          type="text"
          placeholder="name"
        />
        <input
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
          type="email"
          required
          placeholder="email"
        />
        <textarea
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
          required
          placeholder="say somethings..."
        ></textarea>

        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
