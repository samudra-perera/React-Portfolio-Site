import React, { useState } from "react";
import "./WorkCard.css";
import { Scrollbars } from "react-custom-scrollbars-2";

const WorkCard = (props) => {
  //The state for the mouse hover
  const [isHovering, setIsHovering] = useState(false);
  const {
    companyName,
    jobTitle,
    location,
    workPeriod,
    experience,
    whatILearned,
    img,
    colourCode,
  } = props;

  //MouseEventHandlers to set the display types
  const setInsideValue = () => {
    setIsHovering(true);
    console.log(isHovering);
  };

  const setOutValue = () => {
    setIsHovering(false);
    console.log(isHovering);
  };

  //Create a function to check if the primary colour is white...if white use secondary colour (for second divs headings)
  const checkWhite = (value) => {
    if (value[0] === "white") {
      return value[1];
    } else {
      return value[0];
    }
  };

  const checkSecondaryColour = (value) => {
    if (value[1] === "white") {
      return value[1];
    } else {
      return value[0];
    }
  };

  //Toggles the classes on the mouseEnter and mouseLeave events
  const isMain = (boolean) => {
    return !boolean ? "work-card-out" : "hidden";
  };

  const isHidden = (boolean) => {
    return boolean ? "work-card-in" : "hidden";
  };

  return (
    <div className="working-card-container">
      <div
        className={isMain(isHovering)}
        style={{ background: colourCode[0] }}
        onMouseEnter={setInsideValue}
      >
        <h1 className="working-card-header" style={{ color: colourCode[1] }}>
          {companyName}
        </h1>
        <img alt={companyName + " logo"} src={img} className="work-card-img" />
        <h3 className="work-period" style={{ color: colourCode[1] }}>
          {workPeriod}
        </h3>
        <h4 className="work-location" style={{ color: colourCode[1] }}>
          {location}
        </h4>
      </div>
      <div
        className={isHidden(isHovering)}
        onMouseLeave={setOutValue}
        style={{ background: checkSecondaryColour(colourCode) }}
      >
        <h1 style={{ color: checkWhite(colourCode) }} className="job-title">
          {jobTitle}
        </h1>
        <Scrollbars style={{ height: 300 }}>
          <div className="resume-content">
            <h2
              style={{ color: checkWhite(colourCode) }}
              className="sumamry-heading"
            >
              Things I learned
            </h2>
            <p className="work-summary">{whatILearned}</p>
            <h2
              style={{ color: checkWhite(colourCode) }}
              className="highlight-heading"
            >
              Key Highlights
            </h2>
            {experience.map((point, index) => {
              return (
                <p className="work-experience" key={index}>
                  {point}
                </p>
              );
            })}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default WorkCard;
