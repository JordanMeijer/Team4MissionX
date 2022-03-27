import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'


export default function TeacherDashboardProjectSubmissions() {
  return (
    <div>
        <div>
            <StudentTeacherHeader />
        </div>
        <div className='Dashboard'> 
            <SideBar page="/teacherdashboard/projectsubmissions" TeacherVersion={true}/> 
            <div className='ProjectSubmissions'>
                </div>
        </div>
    </div>
)
}