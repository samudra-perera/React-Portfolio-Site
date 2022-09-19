import React from "react";
import './projects.css'
import { projectList } from "./project-info";

const Projects = () => {
    return (
        <div className="projects-container" id='projects'>
            <div>
                <h1 className="Projects-header">Projects</h1>
            </div>
            <div className="card-container-main">
                <ProjectMap />
            </div>
        </div>
    )
}

const ProjCard = (props) => {
    const {projectNumber, title, description, github, hostedLink} = props
    return (
        <div className="card-container">
            <div className="card-main-info">
                <span className="card-proj-number">Project #{projectNumber}</span>
                <h3 className="card-header">{title}</h3>
                <p className="card-para">{description}</p>
            </div>
            <div className="card-footer">
                <a className="card-github" href={github} target='_blank' rel="noreferrer">
                    <i class="fa-brands fa-github"></i>
                    <span className="card-footer-span">Repo</span>
                </a>
            {hostedLink !== null && 
                <a className="card-hosted-link" href={hostedLink} target='_blank' rel="noreferrer">
                    <i class="fa-solid fa-link"></i>
                    <span className="card-footer-span">Link</span>
                </a>
            }
            </div>
        </div>
    )
}

const ProjectMap = () => {
    return (
        projectList.map(project => (
                <ProjCard 
                projectNumber = {project.projectNumber}
                title = {project.title}
                description = {project.description}
                github = {project.github}
                hostedLink = {project.hostedLink}
                />
            )
        )
    )
}

export default Projects