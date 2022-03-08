import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import StudentProgressCard from '../components/StudentProgressCard.js';

export default function TeacherDashboard() {
    return (
        <div>
            <div>
                <StudentTeacherHeader />
            </div>
            <div className='Dashboard'> 
                <SideBar /> 
                <div className='DashboardContentsParentContainer'>
                    <div className='DashboardContentsChildContainer'>
                        <h1 className='BeginnerCourseText'>Beginner Course</h1>
                            <div>
                                
                                <StudentProgressCard studentName='AIDEN ANDREWS' projectsCompleted={[1,2,3,4]} />
                                <StudentProgressCard studentName='COURTNEY BRISOL' projectsCompleted={[1]}/>
                                <StudentProgressCard studentName='NAGINI CORTES' projectsCompleted={[1,4,7,8]}/>
                                <StudentProgressCard studentName='RAWIRI' projectsCompleted={[1,2,3,4,6,7,8]}/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}