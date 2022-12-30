import React from "react";
import "./about-me.css";
import AboutDropDown from "./AboutDropDown";
import { QnA } from "./QnA";

const AboutMe = () => {
  return (
    <div className="aboutMe-container" id="about-me">
      <h1 className="aboutMe-header">About Me</h1>
      <div className="about-accordian">
        {QnA.map((elem, index) => {
          return (
            <AboutDropDown
              answer={elem.answer}
              question={elem.question}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;

{
  /* <div className='aboutMe-left'>
<img src={Hi} alt='samudra-bitmoji face' className='samudraBitmoji'/>
</div>
<div className='aboutMe-right'>
<div className='aboutMe-card'>
    <h1 className='aboutMe-header'>About Me</h1>
    <p>
    Hi, my name is Samudra Perera and I am a fullstack developer living in the Greater Toronto Area. I got my education from the University of Waterloo (UW) with a Bachelor’s of Applied Science in Civil Engineering (2021) and an option in Management Sciences (kind of like a minor). Before I transitioned into tech I used to design buildings and help contractors construct them from inception to completion. 
    <br></br>
    <br></br>
    So, you’re probably wondering how I ended up here? Well, it’s pretty simple. After completing six internships and a fulltime job, I had tested and tried the majority of civil engineering pathways and knew something wasn’t clicking. Although I loved my co-workers the work felt unimpactful and unfulfilling to me. During my time working full-time I was part of a small team revamping the WSP Building Science Canada Portal (essentially a large database storing project files and providing other services to employees). Our goal was to redesign the filing structure and simplify the UI/UX experience for new and existing users. This is where I recognized the impact technology can have on a large scale and where I decided this was the space I wanted to pursue a career in. 
    <br></br>
    <br></br>
    Outside of tech, I enjoy playing sports, going to the gym, hanging out with friends, watching anime, and reading books.
    </p>
</div>
</div> */
}
