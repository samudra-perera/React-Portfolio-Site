import React, { useState } from "react";
import "./about-me.css";

const AboutDropDown = (props) => {
    // Props from the QnA array
  const { question, answer, index } = props;
  //UseState of the accordion
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div key={index} className="accordion">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <h2>{question}</h2>
          <h2>{isActive ? "-" : "+"}</h2>
        </div>
        {isActive && <div className="accordion-content">{answer}</div>}
      </div>
    </>
  );
};

export default AboutDropDown;
