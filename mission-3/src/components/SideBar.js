import './SideBar.css'
import DashboardButtonExpanded from './DashboardButtonExpanded';
import LogOut from '../images/Student Areas/Icon awesome-sign-out-alt.png'
import Settings from '../images/Student Areas/Icon material-settings.png'
import UserCircle from '../images/Student Areas/Icon awesome-user-circle.png'
import ProfilePicture from '../images/Teacher Areas/Ellipse 38.png'
import ProgressTrackerIconLight from '../images/Teacher Areas/Progress light.png'
import StudentProfileIconLight from '../images/Teacher Areas/Icon awesome-user-graduate.png'
import HelpRequestIconLight from '../images/Teacher Areas/Icon material-live-help.png'
import ProjectSubmissionsIconLight from '../images/Teacher Areas/submit proj.png'
import ProjectLibraryIconLight from '../images/Teacher Areas/library light.png'
// import ProgressTrackerIconDark from '../images/Teacher Areas/Progress Dark.png'

export default function SideBar() {
    return (        
        <div class='SideBar'>
            This is the SideBar
            <div class='ProfilePicture'>
                <img src={ProfilePicture} />
            </div>
            <div class='DashboardButtons'>
                <DashboardButtonExpanded buttonText='Progress Tracker' image={ProgressTrackerIconLight} />
                <DashboardButtonExpanded buttonText='Student Profiles'image={StudentProfileIconLight}/>
                <DashboardButtonExpanded buttonText='Help Request'image={HelpRequestIconLight}/ >
                <DashboardButtonExpanded buttonText='Project Submissions'image={ProjectSubmissionsIconLight}/>
                <DashboardButtonExpanded buttonText='Project Library'image={ProjectLibraryIconLight}/>
            </div>
            <div class='AccountButtons'>
                <div class='AccountButtonText'>
                    <img src={UserCircle} />
                    <p>Profile</p>
                </div>
                <div class='AccountButtonText'>
                    <img src={Settings} />
                    <p>Settings</p>
                </div>
                <div class='AccountButtonText'>
                    <img src={LogOut} />
                    <p>Log out</p>
                </div>
            </div>
        </div>
    )
}