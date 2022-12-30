import React from "react";
import "./projects.css";
import { projectList } from "./project-info";
import ProjCard from "./ProjCard";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <div>
        <h1 className="Projects-header">Projects</h1>
      </div>
      <div className="card-container-main">
        {projectList.map((project, index) => (
          <ProjCard
            projectNumber={project.projectNumber}
            title={project.title}
            description={project.description}
            github={project.github}
            hostedLink={project.hostedLink}
            param={project.param}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
