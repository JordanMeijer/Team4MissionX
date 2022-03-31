import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import DashboardButtonExpanded from "./DashboardButtonExpanded";
import LogOut from "../images/Student Areas/Icon awesome-sign-out-alt.png";
import Settings from "../images/Student Areas/Icon material-settings.png";
import UserCircle from "../images/Student Areas/Icon awesome-user-circle.png";
import TeacherProfilePicture from "../images/Teacher Areas/Ellipse 38.png";
import StudentProfilePicture from "../images/Student Areas/Ellipse 38.png";
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
  const StudentButtonContents = [
    {
      link: "/studentprojectbuilder",
      buttonText: "LEARNING OBJECTIVES",
      image: ObjectiveIconLight,
      darkImage: ObjectiveIconDark,
    },
    {
      link: "/studentprojectbuilder1",
      buttonText: "INSTRUCTIONS",
      image: StepsLight,
      darkImage: StepsDark,
    },
    {
      link: "/studentprojectbuilder2",
      buttonText: "VIDEO TUTORIAL",
      image: VideoLight,
      darkImage: VideoDark,
    },
    {
      link: "/studentprojectbuilder3",
      buttonText: "MAKE PROJECT",
      image: NewProjLight,
      darkImage: NewProjDark,
    },
    {
      link: "/studentprojectbuilder4",
      buttonText: "SUBMIT PROJECT",
      image: SubmitProjLight,
      darkImage: SubmitProjDark,
    },
    {
      link: "/studentprojectbuilder5",
      buttonText: "BONUS CHALLENGE",
      image: PrizeLight,
    },
    {
      link: "/studentprojectbuilder6",
      buttonText: "TAKE THE QUIZ",
      image: ListLight,
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

  let ButtonContents = [];
  let ProfilePicture;

  if (props.TeacherVersion) {
    ButtonContents = TeacherButtonContents;
    ProfilePicture = TeacherProfilePicture;
  } else {
    ButtonContents = StudentButtonContents;
    ProfilePicture = StudentProfilePicture;
  }

  const CreateButtons = ButtonContents.map((ButtonContents) => {
    if (props.page === ButtonContents.link) {
      return (
        <DashboardButtonExpanded
          key={ButtonContents}
          className="DashboardButtonDark"
          buttonText={ButtonContents.buttonText}
          image={ButtonContents.darkImage}
          link={ButtonContents.link}
        />
      );
    } else {
      return (
        <DashboardButtonExpanded
          key={ButtonContents}
          className="DashboardButtonLight"
          buttonText={ButtonContents.buttonText}
          image={ButtonContents.image}
          link={ButtonContents.link}
        />
      );
    }
  });

  return (
    <div className="SideBar">
      <div className="ProfilePicture">
        <img src={ProfilePicture} alt="profile_picture" />
      </div>
      <div className="DashboardButtons">{CreateButtons}</div>
      <div className="AccountButtons">
        <div className="AccountButtonText">
          <img src={UserCircle} alt="user_circle_profile" />
          <p>Profile</p>
        </div>
        <div className="AccountButtonText">
          <img src={Settings} alt="settings_icon" />
          <p>Settings</p>
        </div>
        <div className="AccountButtonText">
          <img src={LogOut} alt="logout_icon" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
}
