import React from "react";
import './skills.css'
import reactLogo from '../../img/react.png';
import css from '../../img/css.png'
import html from '../../img/html5.png'
import mongoDB from '../../img/mongodb.png'
import node from '../../img/nodejs.png'
import postgres from '../../img/postgresql.png'
import express from '../../img/express.png'
import figma from '../../img/figma.png'
import ai from '../../img/adobe-illustrator-cc.png'
import js from '../../img/javascript.png'

const Skills = () => {
    return (
        <div className="skillsContainer" id="skills">
            <div className="skills-header-container">
                <h1 className="skills-header">My Tools</h1>
            </div>
            <div className="skills-row-one">
                <img src={html} alt='HTML Logo' className="skill-logo"/>
                <img src={css} alt='CSS Logo' className="skill-logo"/>
                <img src={js} alt='JS Logo' className="skill-logo"/>
                <img src={mongoDB} alt='MongoDB Logo' className="skill-logo"/>
                <img src={express} alt='Express Logo' className="skill-logo"/>
                <img src={reactLogo} alt='React Logo' className="skill-logo"/>
            </div>
            <div className="skills-row-two">
                <img src={node} alt='Node Logo' className="skill-logo"/>
                <img src={postgres} alt='PostgreSQL Logo' className="skill-logo"/>
                <img src={figma} alt='Figma Logo' className="skill-logo"/>
                <img src={ai} alt='Adobe Illustrator Logo' className="skill-logo"/>
            </div>
        </div>
    )
}

export default Skills