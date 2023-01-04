import React, { useState } from "react";
import "./WorkCard.css";

const WorkCard = (props) => {
  //The state for the mouse hover
  const [isHovering, setIsHovering] = useState(false);
  const {
    id,
    companyName,
    jobTitle,
    location,
    workPeriod,
    experience,
    whatILearned,
    img,
    colourCode
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

  //Toggles the classes on the mouseEnter and mouseLeave events
  const isMain = (boolean) => {
    return !boolean ? "work-card-out" : "hidden";
  };

  const isHidden = (boolean) => {
    return boolean ? "work-card-in" : "hidden";
  };

  return (
    <div className="working-card-container">
      <div className={isMain(isHovering)} style={{background: colourCode[0]}} onMouseEnter={setInsideValue}>
        <h1 className="working-card-header" style={{color: colourCode[1]}}>{companyName}</h1>
        <img alt={companyName + " logo"} src={img} className="work-card-img" />
        <h3 className="work-period" style={{color: colourCode[1]}}>{workPeriod}</h3>
      </div>
      <div className={isHidden(isHovering)} onMouseOut={setOutValue}>
        <h1>This is the hidden</h1>
      </div>
    </div>
  );
};

export default WorkCard;
