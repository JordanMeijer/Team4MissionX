import React from 'react';
import './TeacherHelpRequestCards.css'

function TeacherHelpRequestsCards({ studentProfilePicture, name, dateTime }) {
    console.log(dateTime)
    let NewDate = new Date(dateTime)
    console.log(NewDate)
    let date = NewDate.toDateString()
    let time = NewDate.toLocaleTimeString()

    return (
        <div className='TeacherHelpRequestCardParentContainer'>
            <div className='CheckBox'></div>
            <div className='TeacherHelpRequestCardContainer'>
                <img src={studentProfilePicture} alt="dashboard_icon" className='HelpRequestStudentProfilePicture' />
                <h3 className='CardText'>
                    {name} needs help with their project.
                </h3>
                <div className='TimeStampContainer'>
                    <div className='TimeStamp'>
                        <p>{date}</p>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeacherHelpRequestsCards;