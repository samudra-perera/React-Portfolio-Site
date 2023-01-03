import React from 'react'
import WorkCard from './WorkCard'
import { resume } from './WorkExp'

const Resume = () => {
    const {id, companyName, jobTitle, location, workPeriod, experience, whatILearned } = resume
  return (
    <div>
        <WorkCard/>
    </div>
  )
}

export default Resume