import React from "react";
import "./projects.css";
import { projectList } from "./project-info";
import ProjCard from "./ProjCard";

const Projects = (props) => {
  const { filter } = props;
  //Whenever the skills filter is set to null all projects will display, else it will only display projects that are within the project object stack
  if (filter) {
    return (
      <div className="projects-container" id="projects">
        <div>
          <h1 className="Projects-header">Projects</h1>
        </div>
        <div className="card-container-main">
          {projectList.map((project, index) => {
            if (project.stack.includes(filter)) {
              return (
                <ProjCard
                  projectNumber={project.projectNumber}
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  hostedLink={project.hostedLink}
                  param={project.param}
                  key={index}
                />
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="projects-container" id="projects">
        <div>
          <h1 className="Projects-header">Projects</h1>
        </div>
        <div className="card-container-main">
          {projectList.map((project, index) => {
            return (
              <ProjCard
                projectNumber={project.projectNumber}
                title={project.title}
                description={project.description}
                github={project.github}
                hostedLink={project.hostedLink}
                param={project.param}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default Projects;
