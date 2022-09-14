import Nav from "./components/nav/nav";
import Landing from './components/landing/landing';
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";
import Skills from "./components/my-skills/skills";

function App() {
  return (
      <div> 
        <Nav/>
        <Landing/> 
        <AboutMe/>
        <Skills/>
        <Projects/>
      </div>
  );
}

export default App;
