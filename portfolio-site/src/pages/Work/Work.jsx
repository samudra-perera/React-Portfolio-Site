import React from "react";
import Resume from "../../components/work-card/Resume";
import "./Work.css";

const Work = () => {
  return (
    <div className="workContainer">
      <h1 className="work-header">Work Experience</h1>
      <h4>For a more consolidated look at my prior experience check out my <a className="work-anchor" href="https://www.linkedin.com/in/samudraperera/">LinkedIn</a></h4>
      <div>
        <Resume />
      </div>
    </div>
  );
};

export default Work;
