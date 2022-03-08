import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import ProgressTracker from '../components/ProgressTracker.js'


export default function TeacherDashboard() {
  return (
    <div>
      <div>
        <StudentTeacherHeader render_project_bar={false} text_middle="Help Centre"/>
      </div>
      <div className='Dashboard'> 
        <SideBar /> 
        <ProgressTracker />
      </div>
    </div>
  );
};