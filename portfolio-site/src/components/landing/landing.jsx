import React, { Component } from "react";
import './landing.css'
import landing from '../../img/landing.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useSpring, animated} from "react-spring";

export class Landing extends Component {
    render() {
        return (
            <LandingWriter/>
        )
    }
}

const LandingWriter = () => {
    const {text} = useTypewriter({
        words: [ " am a developer."," am a problem solver."," am a life long learner."," code.", " am a creative."],
        loop: 0, 
        typeSpeed: 150,
        deleteSpeed: 50,
        delaySpeed: 1000
        })

        const anim = useSpring({
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
            config: {
                duration:2000,
            }
        })

    return (
        <animated.div style={anim}>
            <div className="landing-container" id="landing">
                <div className="landing-container-left">
                    <div className="landing-container-left-text">
                        <h1 className="landing-title">I{text} <Cursor /></h1>
                        <p className="landing-blurb">"I'm Samudra, thanks for checking my website out! To see some of my work click below."</p>
                        <a className="project-button" href='#projects'>Projects</a>
                    </div>
                </div>
                <div className="landing-container-right">
                    <img src={landing} alt='Person doing work'/>
                </div>
            </div>
        </animated.div>
    )
}


export default Landing