import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'


export default function TeacherDashboardHelpRequests() {
  return (
    <div>
        <div>
            <StudentTeacherHeader />
        </div>
        <div className='Dashboard'> 
            <SideBar page="/teacherdashboard/helprequests"/> 
            <div className="HelpRequest">
            </div>
        </div>
    </div>
)}