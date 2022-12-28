import React, { Component } from "react";
import "./landing.css";
import landing from "../../img/landing.png";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useSpring, animated } from "react-spring";

export class Landing extends Component {
  render() {
    return <LandingWriter />;
  }
}

const LandingWriter = () => {
  const { text } = useTypewriter({
    words: [
      " am a developer.",
      " am a problem solver.",
      " am a life long learner.",
      " code.",
      " am a creative.",
    ],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const props = useSpring(({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      config: {
        duration: 2000,
      },
    }),
  );

  return (
    <animated.div style={props}>
      <div className="landing-container" id="landing">
        <div className="landing-container-left">
          <div className="landing-container-left-text">
            <h1 className="landing-title">
              I{text} <Cursor />
            </h1>
            <p className="landing-blurb">
              Civil Engineer turned software engineer. To see my work click below. To learn more about me scroll down.
            </p>
            <Link
              className="project-button"
              to="projects"
            >
              Projects
            </Link>
          </div>
        </div>
        <div className="landing-container-right">
          <img src={landing} alt="Person doing work" />
        </div>
      </div>
    </animated.div>
  );
};

export default Landing;
