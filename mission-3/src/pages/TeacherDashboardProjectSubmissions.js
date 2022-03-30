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
                <SideBar page="/teacherdashboard/projectsubmissions" TeacherVersion={true} />
                <div className='DashboardContentsParentContainer'>
                    <div className='DashboardContentsChildContainer'>
                        <h1 className='BeginnerCourseText'>Beginner Course</h1>
                        <div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}