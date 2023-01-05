import React from "react";
import WorkCard from "./WorkCard";
import { resume } from "./WorkExp";
import "./WorkCard.css";

const Resume = () => {
  return (
    <div className="resume-container">
      {resume.map((experience) => {
        return (
          <WorkCard
            key={experience.id}
            companyName={experience.companyName}
            location={experience.location}
            workPeriod={experience.workPeriod}
            whatILearned={experience.whatILearned}
            experience={experience.experience}
            img={experience.img}
            colourCode={experience.colourCode}
            jobTitle={experience.jobTitle}
          />
        );
      })}
    </div>
  );
};

export default Resume;
