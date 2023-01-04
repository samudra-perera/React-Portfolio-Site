import React from 'react'
import WorkCard from './WorkCard'
import { resume } from './WorkExp'

const Resume = () => {
    //const {id, companyName, jobTitle, location, workPeriod, experience, whatILearned, img } = resume
  return (
    <div>
        <WorkCard 
        jobTitle={resume[0].jobTitle}
        companyName={resume[0].companyName}
        key={resume[0].id}
        location={resume[0].location}
        workPeriod={resume[0].workPeriod}
        experience={resume[0].experience}
        whatILearned={resume[0].whatILearned}
        img={resume[0].img}
        colourCode={resume[0].colourCode}
        />
    </div>
  )
}

export default Resume