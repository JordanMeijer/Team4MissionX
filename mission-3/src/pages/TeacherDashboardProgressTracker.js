import React from 'react';
import './TeacherDashboard.css';

import SideBar from '../components/SideBar.js'
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import StudentProgressCard from '../components/StudentProgressCard.js';

export default function TeacherDashboard() {
  return (
    <div>
      <div>
        <StudentTeacherHeader render_project_bar={false} text_middle="Help Centre" />
      </div>
      <div className='Dashboard'>
        <SideBar page="/teacherdashboard/progresstracker" TeacherVersion={true} />
        <div className='DashboardContentsParentContainer'>
          <div className='DashboardContentsChildContainer'>
            <div className='DashboardTitleContainer'>
              <h1 className='BeginnerCourseText'>Beginner Course</h1>
            </div>
            <div className='DashboardContents'>
              <div className='DashboardProgressCards'>
                <StudentProgressCard studentName='AIDEN ANDREWS' projectsCompleted={[1, 2, 3, 4]} />
                <StudentProgressCard studentName='COURTNEY BRISOL' projectsCompleted={[1]} />
                <StudentProgressCard studentName='NAGINI CORTES' projectsCompleted={[1, 4, 7, 8]} />
                <StudentProgressCard studentName='RAWIRI' projectsCompleted={[1, 2, 3, 4, 6, 7, 8]} />
              </div>
              <div className='ScrollBarParent'>
                <div className='ScrollBarChild'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

