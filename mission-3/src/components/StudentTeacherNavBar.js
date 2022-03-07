import '../App.css';
import './StudentTeacherNavBar.css';

function StudentTeacherNavBar () {
  return (
    <div className="header_button">
      <div id="header_left_button">
        <span className="button_content" >Take Screenshot </span>
      </div>
      <div id="header_mid_button">
      <  span className="button_content" >Help Centre </span>
      </div>
      <div id="header_right_button">
        <span className="button_content" >More Projects </span>
      </div>
    </div>
  );
}

export default StudentTeacherNavBar;