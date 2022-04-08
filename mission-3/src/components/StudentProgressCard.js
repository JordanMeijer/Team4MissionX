import React from "react"
import './StudentProgressCard.css'

export default function StudentProgressCard({ studentName, projectsCompleted }) {
  const numberOfProjectsStudentProgressCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


  // returns either a green or clear circle based upon if the student has compleated that project or not
  const ProjectEllipse = numberOfProjectsStudentProgressCard.map(numberOfProjectsStudentProgressCard => {
    if (projectsCompleted.includes(numberOfProjectsStudentProgressCard)) {
      return (
        <div key={numberOfProjectsStudentProgressCard} className="ProjectEllipseCompleted">
          <p className="StudentProgressCardText">{numberOfProjectsStudentProgressCard}</p>
        </div>
      )
    }
    else {
      return (
        <div key={numberOfProjectsStudentProgressCard} className="ProjectEllipse">
          <p className="StudentProgressCardText">{numberOfProjectsStudentProgressCard}</p>
          </div>
      )
    }
  })

  return (

    <div className="StudentProgressCardContainer">
      <div className="NameAndProjectsCompletedContainer">
        <div className="Name">
          <h2 className='StudentNameText'>{studentName}</h2>
        </div>
        <div className="ProjectsCompleted">
          <p>{projectsCompleted.length}/15 Projects Completed</p>
        </div>
      </div>
      <div className="ProjectsCompletionProgress">
        {ProjectEllipse}
      </div>
    </div>

  )
}