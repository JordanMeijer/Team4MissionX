import './HomeHeader.css';
import StarLogo07_2 from '../images/Home/Star Logo 07-2.png';
import IconUserCircle from '../images/Student Areas/Icon awesome-user-circle.png';
import Languages from './Languages';


function HomeHeader () {
  return (
    <>
      <header className="header_main_style">
        <section>
          <img src={StarLogo07_2} alt="home_logo" />
        </section>
        <section>
          <div className="header_navbar_content">HOME</div>
          <div className="header_navbar_content">FEATURES</div>
          <div className="header_navbar_content">TEACHERS</div>
        </section>
        <div className="header_register_login_flags_parent_container">
          <section className="header_flags_child_container">
            <div className="header_lang_content">LANG</div>
            <Languages className="header_flags" />
          </section>
          <section>
            <img className="header_user_circle" src={IconUserCircle} alt ="icon_awesome_user_circle" />
            <div className="header_register_login_element">REGISTER | LOGIN</div>
          </section>
          
        </div>
      </header>
    </>
  );
};

export default HomeHeader;