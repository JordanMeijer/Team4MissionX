import { Link } from 'react-router-dom';
import './SideBar.css'
import DashboardButtonExpanded from './DashboardButtonExpanded';
import LogOut from '../images/Student Areas/Icon awesome-sign-out-alt.png'
import Settings from '../images/Student Areas/Icon material-settings.png'
import UserCircle from '../images/Student Areas/Icon awesome-user-circle.png'
import ProfilePicture from '../images/Teacher Areas/Ellipse 38.png'
import ProgressTrackerIconLight from '../images/Teacher Areas/Progress light.png'
import ProgressTrackerIconDark from '../images/Teacher Areas/Progress dark.png'
import StudentProfileIconLight from '../images/Teacher Areas/Icon awesome-user-graduate.png'
import StudentProfileIconDark from '../images/Teacher Areas/Icon awesome-user-graduate-1.png'
import HelpRequestIconLight from '../images/Teacher Areas/Icon material-live-help.png'
import HelpRequestIconDark from '../images/Teacher Areas/Icon material-live-help dark.png'
import ProjectSubmissionsIconLight from '../images/Teacher Areas/submit proj.png'
import ProjectSubmissionsIconDark from '../images/Teacher Areas/submit proj dark.png'
import ProjectLibraryIconLight from '../images/Teacher Areas/library light.png'


export default function SideBar(props) {
  

  const ButtonContents = [
    {link:"/teacherdashboard/progresstracker",buttonText:'Progress Tracker', image:ProgressTrackerIconLight, darkImage:ProgressTrackerIconDark},
    {link:"/teacherdashboard/studentprofiles",buttonText:'Student Profiles', image:StudentProfileIconLight, darkImage:StudentProfileIconDark},
    {link:"/teacherdashboard/helprequests",buttonText:'Help Request' , image:HelpRequestIconLight, darkImage:HelpRequestIconDark},
    {link:"/teacherdashboard/projectsubmissions",buttonText:'Project Submissions' , image:ProjectSubmissionsIconLight, darkImage:ProjectSubmissionsIconDark},
    {link:"/teacherprojectlibrary",buttonText:'Project Library' , image:ProjectLibraryIconLight},
]

  const CreateButtons = ButtonContents.map(ButtonContents => {
    if ( props.page == ButtonContents.link) {
      return (
        <DashboardButtonExpanded key={ButtonContents} className="DashboardButtonDark" buttonText={ButtonContents.buttonText} image={ButtonContents.darkImage} link={ButtonContents.link} />
      )
    }
    else {
      return (
        <DashboardButtonExpanded key={ButtonContents} className="DashboardButtonLight" buttonText={ButtonContents.buttonText} image={ButtonContents.image} link={ButtonContents.link} />
      )
    }
})

  return (        
    <div className='SideBar'>
      <div className='ProfilePicture'>
    
        <img src={ProfilePicture} alt="profile_picture"/>
      </div>
      <div className='DashboardButtons'>
        {CreateButtons}
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
  );
};