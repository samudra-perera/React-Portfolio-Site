import React from "react";
import './projects.css'

const Projects = () => {
    return (
        <div className="projects-container" id='projects'>
            <div>
                <h1 className="Projects-header">Projects</h1>
            </div>
            <div className="card-container-main">
                <ProjCard/>
            </div>
        </div>
    )
}

const ProjCard = (props) => {
    return (
        <div className="card-container">
            <span className="card-logo">Logo</span>
            <h3 className="card-header">This is the title</h3>
            <p className="card-para">This is the description of the project and no matter what Imma do what it takes to be the best</p>
            <div className="card-footer">
                <a className="card-github" href="google.com">
                    <i class="fa-brands fa-github"></i>
                    <span className="card-footer-span">Repo</span>
                </a>
                <a className="card-hosted-link" href="google.com">
                    <i class="fa-solid fa-link"></i>
                    <span className="card-footer-span">Link</span>
                </a>
            </div>
        </div>
    )
}

export default Projects