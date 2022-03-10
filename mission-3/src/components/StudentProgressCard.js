import React from "react"
import './StudentProgressCard.css'

export default function StudentProgressCard({studentName, projectsCompleted}) {
    const numberOfProjectsStudentProgressCard = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    const ProjectEllipse =numberOfProjectsStudentProgressCard.map( numberOfProjectsStudentProgressCard => {
        if (projectsCompleted.includes(numberOfProjectsStudentProgressCard)) {
            return (
                <div className="ProjectEllipseCompleted">{numberOfProjectsStudentProgressCard}</div>
            )}
            else {
            // console.log(numberOfProjectsStudentProgressCard)
            // console.log(projectsCompleted)
            // console.log(projectsCompleted.includes(numberOfProjectsStudentProgressCard))
                return (
            <div className="ProjectEllipse">{numberOfProjectsStudentProgressCard}</div>
                )
            }
        
    }
    )
    return (    
        <div className="StudentProgressCardContainerParent">
            <div className="StudentProgressCardContainerChild">
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
        </div>
    )
}