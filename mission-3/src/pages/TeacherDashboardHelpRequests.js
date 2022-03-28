import './TeacherDashboard.css';
import './TeacherDashboardHelpRequests.css'
import React from 'react';
import StudentTeacherHeader from '../components/StudentTeacherHeader';
import SideBar from '../components/SideBar.js'
import TeacherHelpRequestsCards from '../components/TeacherHelpRequestsCards';
import StudentProfiles from '../StudentProfiles';


export default function TeacherDashboardHelpRequests() {

    // This function pulls the data from StudentProfiles and creates a help request card for each student if HelpRequested = true.
    const HelpRequestCard = StudentProfiles.map(StudentProfiles => {
        if (StudentProfiles.helpRequested) {
            return (
                <TeacherHelpRequestsCards key={StudentProfiles} studentProfilePicture={StudentProfiles.studentProfilePicture} name={StudentProfiles.name} date={StudentProfiles.dateSubmited} time={StudentProfiles.timeSubmited} />
            )
        }
    })
    return (
        <div>
            <div>
                <StudentTeacherHeader />
            </div>
            <div className='Dashboard'>
                <SideBar page="/teacherdashboard/helprequests" TeacherVersion={true} />

                <div className='DashboardContentsParentContainer'>
                    <div className='DashboardContentsChildContainer'>
                        <h2 className='HelpRequestsText'>HELP REQUESTS</h2>
                        <div className='HelpRequestsButtons'>
                            <section>
                                <h3>REPLY</h3>
                            </section>
                            <section>
                                <h3>MARK AS DONE</h3>
                            </section>

                        </div>
                        {HelpRequestCard}
                    </div>

                </div>
            </div>
        </div>
    )
}