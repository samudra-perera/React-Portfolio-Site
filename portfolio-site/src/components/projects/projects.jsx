import React from "react";
import './projects.css'

const Projects = () => {
    return (
        <div className="projects-container" id='projects'>
            <div>
                <h1 className="Projects-header">Projects</h1>
            </div>
            <div>
                <ProjCard/>
            </div>
        </div>
    )
}

const ProjCard = (props) => {
    return (
        <div className="card-container">
            <h2>Yo</h2>
        </div>
    )
}

export default Projects