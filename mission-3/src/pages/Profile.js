import "./Profile.css";
import StudentPhoto from "../images/Teacher Areas/Ellipse -12.png";
import HomeHeader from "../components/HomeHeader";

export default function Profile() {
  return (
    <>
      <HomeHeader />
      <div className="profile_body">
        <div className="profile_settings_background">
          <div className="profile_settings">
            <img className="profile_photo" src={StudentPhoto} alt="student_photo"/>
            <button className="profile_photo_buttons">EDIT PROFILE</button>
            <button className="profile_photo_buttons">CHANGE PHOTO</button>
          </div>
        </div>
        <div className="profile_right_side">
          <div className="profile_data">
            <div>
              <h2 className="profile_person_name">Rawiri Fletcher</h2>
            </div>
            <div className="profile_person_details">
              <div>
                <h3 className="profile_detail_subject">School</h3>
                <h3 className="profile_detail_subject">Teacher</h3>
                <h3 className="profile_detail_subject">Course</h3>
                <h3 className="profile_detail_subject">Date of Birth</h3>
                <h3 className="profile_detail_subject">Contact No</h3>
                <h3 className="profile_detail_subject">Email Address</h3>
              </div>
              <div>
                <h3 className="profile_detail_data">Homai School</h3>
                <h3 className="profile_detail_data">Jasmina Salvador</h3>
                <h3 className="profile_detail_data">Beginner</h3>
                <h3 className="profile_detail_data">25 June 2010</h3>
                <h3 className="profile_detail_data">022 524 63 99</h3>
                <h3 className="profile_detail_data">fletchy.r@gmail.com</h3>
              </div>
            </div>
          </div>
          <div>
            <button className="profile_back_button">BACK TO PROJECTS</button>
          </div>
        </div>
      </div>
    </>
  );
}