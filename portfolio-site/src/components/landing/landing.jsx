import React from "react";
import './landing.css'
import landing from '../../img/landing.png'

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-container-left">
                <div className="landing-container-left-text">
                    <h1>Im a Full Stack Developer</h1>
                    <p>I'm Samudra, thanks for checking my website out!</p>
                    <button>Projects</button>
                </div>
            </div>
            <div className="landing-container-right">
                <img src={landing} alt='Person '/>
            </div>
        </div>
    )
}

export default Landing