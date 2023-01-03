import React, { useState } from "react";
import './WorkCard.css'

const WorkCard = (props) => {
  //The state for the mouse hover
  const [isHovering, setIsHovering] = useState(false)
  const {id, companyName, jobTitle, location, workPeriod, experience, whatILearned} = props

  //MouseEventHandlers to set the display types
  const setInsideValue = () => {
    setIsHovering(true)
    console.log(isHovering)
  }

  const setOutValue = () => {
    setIsHovering(false)
    console.log(isHovering)
  }

  //Toggles the classes on the mouseEnter and mouseLeave events
  const isMain = (boolean) => {
    return !boolean ? "block" : 'hidden'
  }

  const isHidden = (boolean) => {
    return boolean ? "block" : 'hidden'
  }

  return (
    <div className="working-card-container">
      <div className={isMain(isHovering)} onMouseEnter={setInsideValue}>This is the normal</div>
      <div className={isHidden(isHovering)} onMouseOut={setOutValue}>This is the hidden</div>
    </div>
  );
};

export default WorkCard;
