import React from "react";
import Resume from "../../components/work-card/Resume";
import "./Work.css";

const Work = () => {
  return (
    <div className="workContainer">
      <h1 className="work-header">Work Experience</h1>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Work;
