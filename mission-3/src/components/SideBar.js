import React, { useState, useEffect } from "react";
import "./SideBar.css";
import DashboardButtonExpanded from "./DashboardButtonExpanded";
import LogOut from "../images/Student Areas/Icon awesome-sign-out-alt.png";
import Settings from "../images/Student Areas/Icon material-settings.png";
import UserCircle from "../images/Student Areas/Icon awesome-user-circle.png";

// Icons used for Teacher Sidebar
import ProgressTrackerIconLight from "../images/Teacher Areas/Progress light.png";
import ProgressTrackerIconDark from "../images/Teacher Areas/Progress dark.png";
import StudentProfileIconLight from "../images/Teacher Areas/Icon awesome-user-graduate.png";
import StudentProfileIconDark from "../images/Teacher Areas/Icon awesome-user-graduate-1.png";
import HelpRequestIconLight from "../images/Teacher Areas/Icon material-live-help.png";
import HelpRequestIconDark from "../images/Teacher Areas/Icon material-live-help dark.png";
import ProjectSubmissionsIconLight from "../images/Teacher Areas/submit proj.png";
import ProjectSubmissionsIconDark from "../images/Teacher Areas/submit proj dark.png";
import ProjectLibraryIconLight from "../images/Teacher Areas/library light.png";

//Icons used for Student Sidebar
import ObjectiveIconLight from "../images/Student Areas/objectives.png";
import ObjectiveIconDark from "../images/Student Areas/objectives dark.png";
import StepsLight from "../images/Teacher Areas/steps.png";
import StepsDark from "../images/Teacher Areas/steps dark.png";
import VideoLight from "../images/Student Areas/video.png";
import VideoDark from "../images/Student Areas/video dark.png";
import NewProjLight from "../images/Student Areas/new proj.png";
import NewProjDark from "../images/Student Areas/new proj dark.png";
import SubmitProjLight from "../images/Student Areas/submit proj.png";
import SubmitProjDark from "../images/Student Areas/submit proj dark.png";
import PrizeLight from "../images/Student Areas/prize.png";
import ListLight from "../images/Student Areas/list copy.png";

export default function SideBar(props) {

  // These are for handling collapsing-expanding sidebar.
  //  Storing locally info that can be reteived so that state is conserved between refreshes and changing pages
  const sideBarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sideBarCollapsed ? false : true)
  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false);
      localStorage.setItem('sidebar-collapsed', true);
      return;
    }
    setIsExpanded(true);
    localStorage.removeItem('sidebar-collapsed');
  }


  const StudentButtonContents = [
    {
      link: "/studentdashboard",
      buttonText: "LEARNING OBJECTIVES",
      image: ObjectiveIconLight,
      darkImage: ObjectiveIconDark
    },
    {
      link: "/studentdashboard/instructions",
      buttonText: "INSTRUCTIONS",
      image: StepsLight,
      darkImage: StepsDark
    },
    {
      link: "/studentdashboard/videotutorial",
      buttonText: "VIDEO TUTORIAL",
      image: VideoLight,
      darkImage: VideoDark
    },
    {
      link: "/studentdashboard/makeproject",
      buttonText: "MAKE PROJECT",
      image: NewProjLight,
      darkImage: NewProjDark
    },
    {
      link: "/studentdashboard/submitproject",
      buttonText: "SUBMIT PROJECT",
      image: SubmitProjLight,
      darkImage: SubmitProjDark
    },
    {
      link: "/studentdashboard/bonuschallenge",
      buttonText: "BONUS CHALLENGE",
      image: PrizeLight
    },
    {
      link: "/studentdashboard/takethequiz",
      buttonText: "TAKE THE QUIZ",
      image: ListLight
    },
  ];

  const TeacherButtonContents = [
    {
      link: "/teacherdashboard/progresstracker",
      buttonText: "Progress Tracker",
      image: ProgressTrackerIconLight,
      darkImage: ProgressTrackerIconDark,
    },
    {
      link: "/teacherdashboard/studentprofiles",
      buttonText: "Student Profiles",
      image: StudentProfileIconLight,
      darkImage: StudentProfileIconDark,
    },
    {
      link: "/teacherdashboard/helprequests",
      buttonText: "Help Request",
      image: HelpRequestIconLight,
      darkImage: HelpRequestIconDark,
    },
    {
      link: "/teacherdashboard/projectsubmissions",
      buttonText: "Project Submissions",
      image: ProjectSubmissionsIconLight,
      darkImage: ProjectSubmissionsIconDark,
    },
    {
      link: "/teacherprojectlibrary",
      buttonText: "Project Library",
      image: ProjectLibraryIconLight,
    },
  ];

  const getStudentPicture = () => {
    fetch(`http://localhost:4000/studentprofile/${studentID}`)
      .then((res) => res.json())
      .then((StudentPicture) => {
        const studentPicture = StudentPicture;
        setProfilePicture(studentPicture.map(key => key.ProfilePic));
      });
  };

  const [studentID, setStudentID] = useState(10);
  const [profilePicture, setProfilePicture] = useState(props.TeacherVersion? '../images/Teacher Areas/Ellipse 38.png' : '');
  const [buttonContents, setButtonContents] = useState(props.TeacherVersion? TeacherButtonContents : StudentButtonContents)


  
  const CreateButtons = buttonContents.map((ButtonContents) => {
    if (props.page === ButtonContents.link) {
      return (
        <DashboardButtonExpanded
          key={ButtonContents.link}
          className="DashboardButtonDark"
          buttonText={ButtonContents.buttonText}
          image={ButtonContents.darkImage}
          link={ButtonContents.link}
        />
      );
    } else {
      return (
        <DashboardButtonExpanded
          key={ButtonContents.link}
          className="DashboardButtonLight"
          buttonText={ButtonContents.buttonText}
          image={ButtonContents.image}
          link={ButtonContents.link}
        />
      );
    }
  });

  useEffect(() => props.TeacherVersion? null : getStudentPicture(), []);

  return (
    <div className={isExpanded ? 'SideBar' : 'SideBar Collapsed'}>
      <div className="ProfilePicture">
        <img src={profilePicture} alt="profile_picture" />
      </div>
      <div className="DashboardButtons">{CreateButtons}</div>
      <div className={isExpanded ? 'SidebarCollapseButton' : 'SidebarExpandButton'} onClick={handleToggler}>
        <div className={isExpanded ? 'PinkArrowLeft' : 'PinkArrowRight'}></div>
      </div>
      <div className="AccountButtonsContainer">
        <a href={props.TeacherVersion? '/teacherprofile' : '/studentprofile'} className="AccountButton">
          <img src={UserCircle} alt="user_circle_profile" />
          <p className="AccountButtonText">Profile</p>
        </a>
        <a className="AccountButton">
          <img src={Settings} alt="settings_icon" />
          <p className="AccountButtonText">Settings</p>
        </a>
        <a href='/' className="AccountButton">
          <img src={LogOut} alt="logout_icon" />
          <p className="AccountButtonText">Log out</p>
        </a>
      </div>
    </div>
  );
}
