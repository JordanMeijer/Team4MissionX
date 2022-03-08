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
        <div className='SideBar'>
            This is the SideBar
            <div className='ProfilePicture'>
                <img src={ProfilePicture} alt="profile_picture"/>
            </div>
            <div className='DashboardButtons'>
                <DashboardButtonExpanded buttonText='Progress Tracker' image={ProgressTrackerIconLight} />
                <DashboardButtonExpanded buttonText='Student Profiles'image={StudentProfileIconLight}/>
                <DashboardButtonExpanded buttonText='Help Request'image={HelpRequestIconLight}/ >
                <DashboardButtonExpanded buttonText='Project Submissions'image={ProjectSubmissionsIconLight}/>
                <DashboardButtonExpanded buttonText='Project Library'image={ProjectLibraryIconLight}/>
            </div>
            <div className='AccountButtons'>
                <div className='AccountButtonText'>
                    <img src={UserCircle} alt="user_circle_profile"/>
                    <p>Profile</p>
                </div>
                <div className='AccountButtonText'>
                    <img src={Settings} alt="settings_icon"/>
                    <p>Settings</p>
                </div>
                <div className='AccountButtonText'>
                    <img src={LogOut} alt="logout_icon"/>
                    <p>Log out</p>
                </div>
            </div>
        </div>
    )
}