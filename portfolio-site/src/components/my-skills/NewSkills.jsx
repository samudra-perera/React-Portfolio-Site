import React from "react";
import './skills.css'

const NewSkills = () => {
  return (
    <div>
      <div className="skills-header-container">
        <h1 className="skills-header">My Tools</h1>
        <ul className="skills-list">
          <a><li>Javascript</li></a>
          <a><li>C/C++</li></a>
          <a><li>Python</li></a>
          <a><li>Typescript</li></a>
          <a><li>HTML/CSS</li></a>
          <a><li>React</li></a>
          <a><li>NextJS</li></a>
          <a><li>EJS</li></a>
          <a><li>Node.js</li></a>
          <a><li>Express.js</li></a>
          <a><li>Flask</li></a>
        </ul>
      </div>
    </div>
  );
};

export default NewSkills;
