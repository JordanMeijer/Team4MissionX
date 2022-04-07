import React, { useState } from "react";
import "./HomeHeader.css";
import LoginSignupPage from "../pages/LoginSignupPage";
import Languages from "./Languages";

function HomeHeader(props) {
  const [modalShow, setModalShow] = useState(false);

  const pageProfile = [];

  if (props.render_home) {
    pageProfile[0] = (
      <img
        className="header_user_circle"
        src='images/Student Areas/Icon awesome-user-circle.png'
        alt="icon_awesome_user_circle"
        key="image"
        onClick={() => setModalShow(true)}
      />
    );
    pageProfile[1] = (
      <div 
        className="header_register_login_element" 
        key="text"
        onClick={() => setModalShow(true)}> REGISTER | LOGIN 
      </div>
    );
  } else {
    pageProfile[0] = (
      <img
        className="header_user_profile"
        src={props.picture_path}
        alt="profile"
        key="image"
      />
    );
    pageProfile[1] = (
      <div className="header_register_login_element" key="text">{props.person_name}</div>
    );
  }

  return (
    <>
      <LoginSignupPage modalShow={modalShow} setModalShow={setModalShow} />
      <header className="header_main_style">
        <section>
          <a href={`/`} >
            <img 
              src='images/Home/Star Logo 07-2.png' 
              alt="home_logo" />
          </a>
        </section>
        <section>
          <a href={`/`} >
            <div className="header_navbar_content">HOME</div>
          </a>
          <div className="header_navbar_content">FEATURES</div>
          <div className="header_navbar_content">TEACHERS</div>
        </section>
        <div className="header_register_login_flags_parent_container">
          <section className="header_flags_child_container">
            <div className="header_lang_content">LANG</div>
            <Languages className="header_flags" />
          </section>
          <section className="header_data">{pageProfile}</section>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
