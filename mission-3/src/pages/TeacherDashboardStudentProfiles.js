import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'


export default function TeacherDashboardStudentProfiles() {
  return (
    <div>
        <div>
            <StudentTeacherHeader />
        </div>
        <div className='Dashboard'> 
            <SideBar page="/teacherdashboard/studentprofiles"/> 
            <div className="StudentProfiles">
                </div>
        </div>
    </div>
)}