import '../App.css';
import './StudentTeacherNavBar.css';

function StudentTeacherNavBar (props) {
  return (
    <div className="header_button">
      <div id="header_left_button">
        <span className="button_content">{props.text_navbar_left}</span>
      </div>
      <div id="header_mid_button">
        <span className="button_content">{props.text_navbar_mid}</span>
      </div>
      <div id="header_right_button">
        <span className="button_content">{props.text_navbar_right}</span>
      </div>
    </div>
  );
}

export default StudentTeacherNavBar;