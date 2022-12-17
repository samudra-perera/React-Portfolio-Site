import Nav from "./components/nav/nav";
import Landing from './components/landing/landing';
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";
import Skills from "./components/my-skills/skills";
import NewSkills from "./components/my-skills/NewSkills";
import Footer from "./components/footer/footer";
import React from "react";

function App() {
  return (
      <div> 
        <Nav/>
        <Landing/> 
        <AboutMe/>
        <NewSkills />
        <Projects/>
        <Footer/>
      </div>
  );
}

export default App;
