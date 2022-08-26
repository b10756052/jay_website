import React from "react";
import ResumePhoto from "../pictures/resume.jpg";

const About = () => {
  return (
    <div id="About" className="container" style={{ height: "88vh" }}>
      <div className="row  h-100 p-5">
        <div className="col-md-8 bg-dark"></div>
        <div className="col-md-4">
          <img src={ResumePhoto} className="w-100 h-100 object-fit-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
