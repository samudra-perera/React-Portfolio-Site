import React from "react";
import "./skills.css";
import Projects from "../projects/projects";
import { useState } from "react";

const NewSkills = () => {
  const [filter, setFilter] = useState("");
  const [languageState, setLanguageState] = useState({
    activeObject: null,
    languages: [
      "Javascript",
      "C/C++",
      "Python",
      "Typescript",
      "HTML/CSS",
      "React",
      "NextJS",
      "EJS",
      "Node.js",
      "Express.js",
      "Flask",
      'MongoDB',
      'SQL',
      'PostgreSQL'
    ],
  });

  //Function that takes in index and sets selected index as the active object
  //If the selected object is clicked again turn the activeObject to null and display all projects
  const toggleActive = (index) => {
    if (languageState.languages[index] === languageState.activeObject) {
      setLanguageState({
        ...languageState,
        activeObject: null,
      });
      setFilter(null);
    } else {
      setLanguageState({
        ...languageState,
        activeObject: languageState.languages[index],
      });
      setFilter(languageState.languages[index]);
    }
  };

  const toggleStyle = (index) => {
    return languageState.languages[index] === languageState.activeObject
      ? "language active"
      : "language inactive";
  };

  console.log(filter);
  return (
    <div>
      <div className="skills-header-container">
        <h1 className="skills-header">My Tools</h1>
        <ul className="skills-list">
          {languageState.languages.map((elem, index) => {
            return (
              <button
                className={toggleStyle(index)}
                key={index}
                value={elem}
                onClick={() => {
                  toggleActive(index);
                }}
              >
                <li>{elem}</li>
              </button>
            );
          })}
        </ul>
      </div>
      <Projects filter={filter}/>
    </div>
  );
};

export default NewSkills;
