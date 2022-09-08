import Nav from "./components/nav/nav";
import Landing from './components/landing/landing';
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";

function App() {
  return (
      <div> 
        <Nav/> 
        <Landing/>
        <AboutMe/>
        <Projects/>
      </div>
  );
}

export default App;
