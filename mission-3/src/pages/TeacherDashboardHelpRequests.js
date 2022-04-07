import './TeacherDashboard.css';
import './TeacherDashboardHelpRequests.css'
import React from 'react';
import { useEffect, useState } from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherHelpRequestsCards from '../components/TeacherHelpRequestsCards';



export default function TeacherDashboardHelpRequests() {
    const [HelpRequests, setHelpRequests] = useState([{
        studentname:"student", 
        studentProfilePicture:"picture", 
        DateCreated:'yyyy-mm-dd hh-mm-ss', 
        Done:0,
        RequestID:0 }])

    const getHelpRequests = () => {
        fetch('http://localhost:4000/teacherdashboard/HelpRequests')
          .then((res) => res.json())
          .then((HelpRequestsData) => {
            console.log(HelpRequestsData);
            const HelpRequests = HelpRequestsData;
            setHelpRequests(HelpRequests)
          })
    }
      
    useEffect(() => getHelpRequests(),[])

    const HelpRequestCard = HelpRequests.map(HelpRequests => {
        if (HelpRequests.Done === 0) 
        {
            return (
                <TeacherHelpRequestsCards 
                key={HelpRequests.RequestID} 
                studentProfilePicture={HelpRequests.ProfilePic} 
                name={HelpRequests.studentname} 
                dateTime={HelpRequests.DateCreated} />
            )
        } return null
    })
    return (
        <div>
            <div>
                <StudentTeacherHeader render_project_bar={false} text_middle="Help Centre" />
            </div>
            <div className='Dashboard'>
                <SideBar page="/teacherdashboard/helprequests" TeacherVersion={true} />

                <div className='DashboardContentsParentContainer'>
                    <div className='DashboardContentsChildContainer'>
                        <h2 className='DashboardTitleText'>HELP REQUESTS</h2>
                        <div className='HelpRequestsButtons'>                          
                                <h3>REPLY</h3>
                                <h3>MARK AS DONE</h3>
                        </div>
                        {HelpRequestCard}
                    </div>

                </div>
            </div>
        </div>
    )
}