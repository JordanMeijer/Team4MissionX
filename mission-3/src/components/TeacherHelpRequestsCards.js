import React from 'react';
import './TeacherHelpRequestCards.css'

function TeacherHelpRequestsCards({ studentProfilePicture, name, dateTime }) {
    console.log(dateTime)

    //converting datetime to the standard used in JS
    let NewDate = new Date(dateTime)
    console.log(NewDate)

    // use this to show date month and year
    let date = NewDate.toDateString()

    // We use to show just the hours and mintues                 
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