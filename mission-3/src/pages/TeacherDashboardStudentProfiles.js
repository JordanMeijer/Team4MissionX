import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherDashboardStudentProfileCard from '../components/TeacherDashboardStudentProfileCard'
import StudentProfiles from '../StudentProfiles'; 

export default function TeacherDashboardStudentProfiles() {   
    const studentProfileCards = StudentProfiles.map(studentProfiles => {
        return (
            <TeacherDashboardStudentProfileCard key={studentProfiles} studentProfilePicture={studentProfiles.studentProfilePicture} name={studentProfiles.name}/>
        )
    })
  return (
    <div>
        <div>
            <StudentTeacherHeader />
        </div>
        <div className='Dashboard'> 
            <SideBar page="/teacherdashboard/studentprofiles" TeacherVersion={true}/> 
            <div className='DashboardContentsParentContainer'>
                <div className="DashboardContentsChildContainer">
                    <div className="StudentProfilesGrid">
                        {studentProfileCards}
                    </div>
              
                </div>
            </div>
        </div>
    </div>
)}