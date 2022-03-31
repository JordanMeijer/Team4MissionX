import React from "react";
import "./StudentTeacherNavBar.css";

function StudentTeacherNavBar(props) {
  return (
    <div className="header_button">
      <button className="header_left_button">{props.text_navbar_left}</button>
      <button className="header_mid_button">{props.text_navbar_mid}</button>
      <button className="header_right_button">{props.text_navbar_right}</button>
    </div>
  );
}

export default StudentTeacherNavBar;
