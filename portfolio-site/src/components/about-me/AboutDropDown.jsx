import React, { useState } from "react";
import { QnA } from "./QnA";
import "./about-me.css";

const AboutDropDown = (props) => {
  const { question, answer, index } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div key={index} className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{question}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{answer}</div>}
      </div>
    </>
  );
};

export default AboutDropDown;
