import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import StudentLoginImage from "../images/Home/Students@2x.png";
import TeacherLoginImage from "../images/Home/teacher@2x.png";
import LoginStudent from "../components/LoginStudent";
import LoginTeacher from "../components/LoginTeacher";
import SignupStudent from "../components/SignupStudent";
import SignupTeacher from "../components/SignupTeacher";
import "../components/LoginPage.css";

function LoginSignupPage(props) {
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => props.setModalShow(false);

  return (
    <>
      <Modal show={props.modalShow} onHide={handleClose} keyboard={false} >
        <ModalHeader closeButton>
        </ModalHeader>
        <ModalBody>
          <div className="login_signup_box">
            <div className="student_slide">
              <div className="student_image">
                <img src={StudentLoginImage} alt="student_login_image"></img>
              </div>
              <div>
                <h1 className="student_title">Students</h1>
              </div>
              <div>
                <button className="login_button" onClick={() => setToggle(true)}>
                  LOG IN
                </button>
                <button className="signup_button" onClick={() => setToggle(false)}>
                  SIGN UP
                </button>
              </div>
              {toggle ? (
              <div>
                <LoginStudent />
              </div>) : (
              <div>
                <SignupStudent />
              </div>)
              }
            </div>
            <div className="teacher_slide">
              <div className="teacher_image">
                <img src={TeacherLoginImage} alt="teacher_login_image"></img>
              </div>
              <div>
                <h1 className="teacher_title">Teachers</h1>
              </div>
              <div>
                <button className="login_button" onClick={() => setToggle(true)}>
                  LOG IN
                </button>
                <button className="signup_button" onClick={() => setToggle(false)}>
                  SIGN UP
                </button>
              </div>
              {toggle ? (
              <div>
                <LoginTeacher />
              </div>) : (
              <div>
                <SignupTeacher />
              </div>)
              }
            </div>
          </div>
        </ ModalBody>
      </ Modal>
    </>
  );
}

export default LoginSignupPage;
