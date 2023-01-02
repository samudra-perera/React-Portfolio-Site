import React from "react";
import "./about-me.css";
import AboutDropDown from "./AboutDropDown";
import { QnA } from "./QnA";

const AboutMe = () => {
  return (
    <div className="aboutMe-container" id="about-me">
      <h1 className="aboutMe-header">About Me</h1>
      <div className="about-accordian">
        {QnA.map((elem, index) => {
          return (
            <AboutDropDown
              answer={elem.answer}
              question={elem.question}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;

