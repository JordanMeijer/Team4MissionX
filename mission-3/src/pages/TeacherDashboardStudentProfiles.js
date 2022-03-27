import './TeacherDashboard.css';
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherDashboardStudentProfileCard from '../components/TeacherDashboardStudentProfileCard'
import StudentProfilePicture1 from '../images/Teacher Areas/Ellipse -1.png'
import StudentProfilePicture2 from '../images/Teacher Areas/Ellipse -2.png'
import StudentProfilePicture3 from '../images/Teacher Areas/Ellipse -3.png'
import StudentProfilePicture4 from '../images/Teacher Areas/Ellipse -4.png'
import StudentProfilePicture5 from '../images/Teacher Areas/Ellipse -5.png'
import StudentProfilePicture6 from '../images/Teacher Areas/Ellipse -6.png'
import StudentProfilePicture7 from '../images/Teacher Areas/Ellipse -7.png'
import StudentProfilePicture8 from '../images/Teacher Areas/Ellipse -8.png'
import StudentProfilePicture9 from '../images/Teacher Areas/Ellipse -9.png'
import StudentProfilePicture10 from '../images/Teacher Areas/Ellipse -10.png'
import StudentProfilePicture11 from '../images/Teacher Areas/Ellipse -11.png'
import StudentProfilePicture12 from '../images/Teacher Areas/Ellipse -12.png'
import StudentProfilePicture13 from '../images/Teacher Areas/Ellipse -13.png'
import StudentProfilePicture14 from '../images/Teacher Areas/Ellipse -14.png'
import StudentProfilePicture15 from '../images/Teacher Areas/Ellipse -15.png'


export default function TeacherDashboardStudentProfiles() {
    const studentProfiles = [
        {name:"AIDEN ANDREWS", studentProfilePicture:StudentProfilePicture1},
        {name:"COURTNEY BRISTOL", studentProfilePicture:StudentProfilePicture2},
        {name:"NAGANI CORTES", studentProfilePicture:StudentProfilePicture3},
        {name:"RAWIRI FLETCHER", studentProfilePicture:StudentProfilePicture4},
        {name:"JAVIER FUEGO", studentProfilePicture:StudentProfilePicture5},
        {name:"TOKIO HAN", studentProfilePicture:StudentProfilePicture6},
        {name:"LISA HORAN", studentProfilePicture:StudentProfilePicture7},
        {name:"ALICE KINDELLAN", studentProfilePicture:StudentProfilePicture8},
        {name:"SIMONE LAINE", studentProfilePicture:StudentProfilePicture9},
        {name:"NEVEAH MACHENRY", studentProfilePicture:StudentProfilePicture10},
        {name:"HARRY MCGRATH", studentProfilePicture:StudentProfilePicture11},
        {name:"LUCIA MENDEZ", studentProfilePicture:StudentProfilePicture12},
        {name:"HANU NEPE", studentProfilePicture:StudentProfilePicture13},
        {name:"SHANE O'MONAHAN", studentProfilePicture:StudentProfilePicture14},
        {name:"MARK O'LEARY", studentProfilePicture:StudentProfilePicture15},
    ]

    const studentProfileCards = studentProfiles.map(studentProfiles => {
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